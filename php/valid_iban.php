<?php 
function getIban($iban){
	$banco = array();
	$check = array();
		if(isset($iban) && !empty($iban)):
			$check = isValid($iban);
			if(@$check['checksum'] === 1):
				$banco['code'] = $check['details']['code'];
				$banco['swift'] = $check['details']['swift'];
				$banco['name'] = $check['details']['sname'];
				$banco['fullname'] = $check['details']['fname'];
				//$api = json_encode($banco);
				return $banco;
			else:
				return "IBAN Inválido";
			endif;
	    endif;
}

function isValid($input){
	$code_list = ['AO'=>['size'=>25,'agency'=>[
		'0040'=>['code'=>'0040','swift' =>'BAIPAOLU', 'sname' =>'BAI', 'fname'=>'Banco Angolano de Investimento'],
		'0066'=>['code'=>'0066','swift' =>'YETUAOLU','sname' =>'YETU', 'fname'=>'Banco Yetu'],
		'0053'=>['code'=>'0053','swift' =>'ANCEAOLU','sname' =>'BANC', 'fname'=>'Banco Angolano de Negócios e Comércio'],
		'0048'=>['code'=>'0048','swift' =>'NOSAAOLU','sname' =>'BMF', 'fname'=>'Banco BAI Microfinanças'],
		'0051'=>['code'=>'0051','swift' =>'BCCBAOLU','sname' =>'BIC', 'fname'=>'Banco BIC'],
		'0004'=>['code'=>'0004','swift' =>'BCGAAOLU','sname' =>'BCGTA', 'fname'=>'Banco Caixa Geral Totta de Angola'],
		'0043'=>['code'=>'0043','swift' =>'COMLAOLU','sname' =>'BCA', 'fname'=>'Banco Comercial Angolano'],
		'0059'=>['code'=>'0059','swift' =>'BCHUAOLU','sname' =>'BCH', 'fname'=>'Banco Comercial do Huambo'],
		'0005'=>['code'=>'0005','swift' =>'BCIDAOLU','sname' =>'BCI', 'fname'=>'Banco de Comércio e Indústria'],
		'0054'=>['code'=>'0054','swift' =>'BDAAAOLU','sname' =>'BDA', 'fname'=>'Banco de Desenvolvimento Angola'],
		'0006'=>['code'=>'0006','swift' =>'BFMXAOLU','sname' =>'BFA', 'fname'=>'Banco de Fomento Angola'],
		'0067'=>['code'=>'0067','swift' =>'BIRVAOLU','sname' =>'BIR', 'fname'=>'Banco de Investimento Rural'],
		'0052'=>['code'=>'0052','swift' =>'BNICAOLU','sname' =>'BNI', 'fname'=>'Banco de Negócios Internacional'],
		'0010'=>['code'=>'0010','swift' =>'BPCLAOLU','sname' =>'BPC', 'fname'=>'Banco de Poupança e Crédito'],
		'0045'=>['code'=>'0045','swift' =>'BESCAOLU','sname' =>'BE', 'fname'=>'Banco Económico'],
		'0047'=>['code'=>'0047','swift' =>'BRDKAOLU','sname' =>'KEVE', 'fname'=>'Banco Keve'],
		'0057'=>['code'=>'0057','swift' =>'...','sname' =>'BKI', 'fname'=>'Banco Kwanza Investimento'],
		'0064'=>['code'=>'0064','swift' =>'PRTSAOLU','sname' =>'BPG', 'fname'=>'Banco Prestígio	BPG'],
		'0055'=>['code'=>'0055','swift' =>'PRTLAOLU','sname' =>'BMA', 'fname'=>'Banco Millennium Atlântico'],
		'0065'=>['code'=>'0065','swift' =>'PUADAOLU','sname' =>'BMAIS', 'fname'=>'Banco Mais'],
		'0044'=>['code'=>'0044','swift' =>'SOLOAOLU','sname' =>'BSOL', 'fname'=>'Banco Sol'],
		'0062'=>['code'=>'0062','swift' =>'BVBXAOLU','sname' =>'BVB', 'fname'=>'Banco Valor'],
		'0056'=>['code'=>'0056','swift' =>'VTBLAOLU','sname' =>'VTB', 'fname'=>'Banco VTB África'],
		'0058'=>['code'=>'0058','swift' =>'FBCOAOLU','sname' =>'FNB', 'fname'=>'Finibanco Angola'],
		'0060'=>['code'=>'0060','swift' =>'SBICAOLU','sname' =>'SBA', 'fname'=>'Standard Bank de Angola'],
		'0063'=>['code'=>'0063','swift' =>'SCBLAOLU','sname' =>'SCBA', 'fname'=>'Standard Chartered Bank de Angola'],
		'0070'=>['code'=>'0070','swift' =>'CDTSAOLU','sname' =>'BCS', 'fname'=>'Banco de Crédito do Sul'],
		'0069'=>['code'=>'0069','swift' =>'POTAAOLU','sname' =>'BPT', 'fname'=>'Banco Postal'],
		'0061'=>['code'=>'0061','swift' =>'...','sname' =>'BPPH', 'fname'=>'Banco de Poupança e Promoção Habitacional'],
		'0071'=>['code'=>'0071','swift' =>'BKCHAOLU','sname' =>'BOCLB', 'fname'=>'Banco da China']
		]]
	];
		$iban = preg_replace("/[^A-Z0-9]/", "", strtoupper($input));
		$code = preg_match("/^([A-Z]{2})(\d{2})([A-Z\d]+)$/", $iban, $bounds, PREG_OFFSET_CAPTURE);
		$bank = $code_list[$bounds[1][0]];
		if(!$code || strlen($iban) < $bank['size']){
			return false;
		}
		$digitos = preg_replace_callback("/[A-Z]/", function($letra){
			return charCodeAt($letra[0], 0) - 55;
		}, implode(array($bounds[3][0], $bounds[1][0], $bounds[2][0])));
		return ['checksum'=>mod97($digitos), 'details'=> $bank['agency'][substr($digitos, 0, 4)]];
}

function charCodeAt($str, $index){
	$char = mb_substr($str, $index, 1, 'UTF-8');
	if(mb_check_encoding($char, 'UTF-8')){
		$ret = mb_convert_encoding($char, 'UTF-32BE', 'UTF-8');
		return hexdec(bin2hex($ret));
	}else{
		return null;
	}
}

function mod97($string){
	$checksum = substr($string, 0, 1);
	$fragment = "";
	for($offset = 2; $offset < strlen($string); $offset += 7){
		$fragment = $checksum . substr($string, $offset, ($offset + 7) - $offset);
		$checksum = (int)$fragment % 97;
	}
	return $checksum;
}

if(isset($_GET['iban'])):
	$iban = strval($_GET['iban']);
	die(json_encode(getIban($iban)));
else:
	echo json_encode("insira um iban");
endif;