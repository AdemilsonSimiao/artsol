<?php
$fieldButtom = $_POST['fieldButtom'];

if($fieldButtom ===''){
	echo json_encode ('erro');
	
}else{
	echo json_encode(.$fieldButtom);
}
?>
