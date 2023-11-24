<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json'); 

include 'db_connect.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();
        while($row = $result->fetch_assoc()) {
            array_push($data, $row);
        }
        echo json_encode($data);
    } else {
        echo json_encode(array());
    }
}

?>
