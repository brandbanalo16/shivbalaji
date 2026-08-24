<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Read JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
    exit();
}

// Extract fields
$formName = isset($data['formName']) ? htmlspecialchars($data['formName']) : 'Website Enquiry';
$name = isset($data['name']) ? htmlspecialchars($data['name']) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : '';
$message_body = isset($data['message']) ? htmlspecialchars($data['message']) : '';
$pageUrl = isset($data['pageUrl']) ? htmlspecialchars($data['pageUrl']) : '';

// Validation
if (empty($name) || (empty($email) && empty($phone))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and either Email or Phone are required.']);
    exit();
}

// Email setup
$to = 'workankit0807@gmail.com';
$subject = "New Website Enquiry from $name";

// HTML Email Message
$htmlMessage = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
    .header { background: #fe5e04; color: white; padding: 15px; text-align: center; border-radius: 5px 5px 0 0; }
    .content { padding: 20px 0; }
    .field { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { margin-top: 5px; font-size: 15px; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h2>New Website Enquiry</h2>
    </div>
    <div class='content'>
      <div class='field'><div class='label'>Form Name</div><div class='value'>$formName</div></div>
      <div class='field'><div class='label'>Name</div><div class='value'>$name</div></div>
";

if (!empty($email)) {
    $htmlMessage .= "<div class='field'><div class='label'>Email</div><div class='value'>$email</div></div>";
}
if (!empty($phone)) {
    $htmlMessage .= "<div class='field'><div class='label'>Phone</div><div class='value'>$phone</div></div>";
}
if (!empty($data['company'])) {
    $company = htmlspecialchars($data['company']);
    $htmlMessage .= "<div class='field'><div class='label'>Company</div><div class='value'>$company</div></div>";
}
if (!empty($data['product'])) {
    $product = htmlspecialchars($data['product']);
    $htmlMessage .= "<div class='field'><div class='label'>Product/Service</div><div class='value'>$product</div></div>";
}
if (!empty($message_body)) {
    $htmlMessage .= "<div class='field'><div class='label'>Message</div><div class='value'>" . nl2br($message_body) . "</div></div>";
}
if (!empty($pageUrl)) {
    $htmlMessage .= "<div class='field'><div class='label'>Submitted From Page</div><div class='value'><a href='$pageUrl'>$pageUrl</a></div></div>";
}

$htmlMessage .= "
    </div>
  </div>
</body>
</html>
";

// Set content-type header for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$senderEmail = !empty($email) ? $email : 'noreply@shivbalajisurgical.com';
$headers .= "From: Shiv Balaji Surgical Website <$senderEmail>" . "\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: $email" . "\r\n";
}

// Send email using PHP mail()
$mailSent = mail($to, $subject, $htmlMessage, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Unable to send email right now. Please try again or contact us directly.'
    ]);
}
?>
