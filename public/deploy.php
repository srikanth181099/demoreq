<?php
// GitHub Webhook Auto-Deploy Script for aaPanel
// Secret key for webhook validation
$secret = 'way2erp2024secret';

// Get the payload
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

// Validate signature
$expected = 'sha256=' . hash_hmac('sha256', $payload, $secret);

if (!hash_equals($expected, $signature)) {
    http_response_code(403);
    die('Invalid signature');
}

// Log the deployment
$logFile = '/www/wwwroot/deploy.log';
file_put_contents($logFile, date('Y-m-d H:i:s') . " - Deployment triggered\n", FILE_APPEND);

// Execute deploy script
$output = shell_exec('/www/wwwroot/deploy.sh 2>&1');
file_put_contents($logFile, $output . "\n", FILE_APPEND);

http_response_code(200);
echo json_encode(['status' => 'success', 'message' => 'Deployment triggered']);
