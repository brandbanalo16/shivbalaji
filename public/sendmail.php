<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Load Composer's autoloader (uncomment if you installed via Composer)
// require 'vendor/autoload.php';

// OR If you downloaded PHPMailer manually, include these:
// require 'PHPMailer/src/Exception.php';
// require 'PHPMailer/src/PHPMailer.php';
// require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// Get raw POST data
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, TRUE);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit;
}

// Validate basic required fields
$name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : '';

if (empty($name) || (empty($email) && empty($phone))) {
    echo json_encode(["success" => false, "message" => "Name and either Email or Phone are required."]);
    exit;
}

// Extract other fields
$formName = isset($data['formName']) ? htmlspecialchars(strip_tags($data['formName'])) : 'Website Enquiry';
$company = isset($data['company']) ? htmlspecialchars(strip_tags($data['company'])) : '';
$product = isset($data['product']) ? htmlspecialchars(strip_tags($data['product'])) : '';
$interest = isset($data['interest']) ? htmlspecialchars(strip_tags($data['interest'])) : '';
$city = isset($data['city']) ? htmlspecialchars(strip_tags($data['city'])) : '';
$message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : '';
$pageUrl = isset($data['pageUrl']) ? htmlspecialchars(strip_tags($data['pageUrl'])) : '';

$productOrInterest = !empty($product) ? $product : $interest;

// Build HTML Email Body
$htmlBody = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;'>
    <div style='background-color: #ff6b00; padding: 20px; text-align: center;'>
        <h2 style='color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;'>{$formName}</h2>
    </div>
    <div style='padding: 30px;'>
";

$fields = [
    'Name' => $name,
    'Email' => $email,
    'Phone' => $phone,
    'Company' => $company,
    'Product/Interest' => $productOrInterest,
    'City' => $city,
    'Message' => $message,
    'Submitted From Page' => $pageUrl
];

foreach ($fields as $label => $value) {
    if (!empty($value)) {
        $htmlBody .= "
        <div style='margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;'>
            <div style='color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;'>{$label}</div>
            <div style='color: #333333; font-size: 16px;'>{$value}</div>
        </div>
        ";
    }
}

$htmlBody .= "
    </div>
    <div style='background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #888888;'>
        This is an automated message from the Shiv Balaji Surgicals website.
    </div>
</div>
";

// If PHPMailer is missing, fallback to native mail() for ease of deployment
if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    $to = 'shivbalajisurgical@gmail.com';
    $subject = "New {$formName} from {$name}";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply@shivbalajisurgicals.com" . "\r\n";
    if (!empty($email)) {
        $headers .= "Reply-To: {$email}" . "\r\n";
    }
    $headers .= "Bcc: brandbanalo16@gmail.com" . "\r\n";

    if (mail($to, $subject, $htmlBody, $headers)) {
        echo json_encode(["success" => true, "message" => "Thank you! Your enquiry has been submitted successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Unable to submit your enquiry. Please try again."]);
    }
    exit;
}

// If PHPMailer IS loaded, use it
$mail = new PHPMailer(true);

try {
    // Server settings (Update these with actual SMTP details if needed)
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'shivbalajisurgical@gmail.com';
    $mail->Password   = 'YOUR_NEW_GMAIL_APP_PASSWORD'; // REPLACE THIS
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('shivbalajisurgical@gmail.com', 'Shiv Balaji Website');
    $mail->addAddress('shivbalajisurgical@gmail.com');
    $mail->addBCC('brandbanalo16@gmail.com');
    
    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New {$formName} from {$name}";
    $mail->Body    = $htmlBody;
    $mail->AltBody = strip_tags(str_replace(['<br>', '</div>'], ["\r\n", "\r\n"], $htmlBody));

    $mail->send();
    echo json_encode(["success" => true, "message" => "Thank you! Your enquiry has been submitted successfully."]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Unable to submit your enquiry. Please try again."]);
}
