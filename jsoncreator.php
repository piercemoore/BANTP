<?php

class JSONCreator {

	function __construct() {
		echo "JSONCreator instantiated! <br /> \r\n";
	}

	function links($count) {
		$links = new stdClass();

		for( $i = 0; $i < $count; $i++ ) {
			$links->{$i} = array(
				"url" => "http://www.google.com",
				"title" => "Google Search",
				"_id" => uniqid(),
				"meta" => (object)array(
					"added" => date("Y-m-d H:i:s")
				)
			);
		}

		echo json_encode($links);

	}

}

$creator = new JSONCreator();

$creator->links(15);