<?php
// ==========================================
// SCRIPT DE MERCADO PAGO (PARA TU HOSTING)
// ==========================================
// Este archivo recibe los datos del frontend y crea la "Preferencia de Pago".
// Se requiere PHP y la extensión cURL activada en tu hosting (casi todos la tienen).

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permite peticiones desde el frontend
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    die();
}

// 1. PON TU ACCESS TOKEN AQUÍ
// Debes entrar a tu cuenta de Mercado Pago -> Tu Negocio -> Configuración -> Credenciales -> Credenciales de Producción
$access_token = "APP_USR-AQUI_VA_TU_ACCESS_TOKEN"; // ¡REEMPLAZA ESTO!

// Leemos los datos enviados desde React (JSON)
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data || !isset($data['price']) || !isset($data['placa'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos incompletos o inválidos.']);
    exit;
}

$price = (float)$data['price'];
$placa = $data['placa'];
$cedula = isset($data['cedula']) ? $data['cedula'] : '';

// 2. Preparamos los datos de la preferencia
$preferenceData = [
    "items" => [
        [
            "title" => "SOAT - Placa: " . $placa,
            "description" => "Pago de SOAT Vehículo " . $placa . " (Cédula: " . $cedula . ")",
            "quantity" => 1,
            "currency_id" => "COP", // Moneda: Pesos Colombianos
            "unit_price" => $price
        ]
    ],
    // "back_urls" => [
    //     "success" => "https://tusitio.com/exito", // A donde va si paga
    //     "failure" => "https://tusitio.com/fallo",  // A donde va si falla
    //     "pending" => "https://tusitio.com/pendiente"
    // ]
];

// 3. Enviamos la petición a la API de Mercado Pago usando cURL
$ch = curl_init('https://api.mercadopago.com/checkout/preferences');

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($preferenceData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $access_token,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión con Mercado Pago: ' . curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// 4. Devolvemos el resultado al frontend de React
$responseData = json_decode($response, true);

if ($http_code == 200 || $http_code == 201) {
    // Éxito: devolvemos la URL de pago
    echo json_encode([
        'success' => true,
        'init_point' => $responseData['init_point'], // Link de Mercado Pago
        'id' => $responseData['id']
    ]);
} else {
    // Error
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Error al crear preferencia',
        'details' => $responseData
    ]);
}
?>
