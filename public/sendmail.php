<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Load Composer's autoloader (uncomment if you installed via Composer)
// require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, TRUE);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit;
}

$name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : 'N/A';
$email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : 'N/A';
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : 'N/A';
$company = isset($data['company']) ? htmlspecialchars(strip_tags($data['company'])) : 'N/A';
$message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : 'N/A';
$product = isset($data['product']) ? htmlspecialchars(strip_tags($data['product'])) : '';
$interest = isset($data['interest']) ? htmlspecialchars(strip_tags($data['interest'])) : '';
$pageUrl = isset($data['pageUrl']) ? htmlspecialchars(strip_tags($data['pageUrl'])) : 'N/A';

$productOrInterest = !empty($product) ? $product : $interest;
if (!empty($productOrInterest)) {
    $subjectLine = "New Enquiry about " . $productOrInterest;
} else {
    $subjectLine = "New Enquiry from " . $name;
}

if ($name === 'N/A' || ($email === 'N/A' && $phone === 'N/A')) {
    echo json_encode(["success" => false, "message" => "Name and either Email or Phone are required."]);
    exit;
}

$date = date('d-m-Y h:i:s A');

// Match the exact format requested
$bodyText = "Congratulations Enquiry Received From Shiv Balaji Surgical {$formName}\n\n";
$bodyText .= "Name: " . $name . "\n";
$bodyText .= "Email: " . $email . "\n";
$bodyText .= "Phone: " . $phone . "\n";
$bodyText .= "Company: " . $company . "\n";
$bodyText .= "Subject: " . $subjectLine . "\n\n";
$bodyText .= "Message:\n" . $message . "\n\n";
$bodyText .= "Website: Shiv Balaji Surgicals\n";
$bodyText .= "Submission Date & Time: " . $date . "\n";

$bodyHtml = nl2br(htmlspecialchars($bodyText, ENT_NOQUOTES));

// Fallback native mail()
if (!class_exists('PHPMailer\PHPMailer\PHPMailer')) {
    $to = 'shivbalajisurgical@gmail.com, brandbanalo16@gmail.com';
    $subject = "New Website Enquiry - " . $name;
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Shiv Balaji Surgical <noreply@shivbalajisurgicals.com>\r\n";
    if ($email !== 'N/A') {
        $headers .= "Reply-To: {$name} <{$email}>\r\n";
    }

    if (mail($to, $subject, $bodyHtml, $headers)) {
        echo json_encode(["success" => true, "message" => "Thank you! Your enquiry has been submitted successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Unable to submit your enquiry. Please try again."]);
    }
    exit;
}

// If PHPMailer IS loaded
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'shivbalajisurgical@gmail.com';
    $mail->Password   = 'tvhw quqc qcsz fxyd'; // Provided in user's .env.local
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('shivbalajisurgical@gmail.com', 'Shiv Balaji Surgical');
    
    $mail->addAddress('shivbalajisurgical@gmail.com');
    $mail->addAddress('brandbanalo16@gmail.com');
    
    if ($email !== 'N/A') {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = "New Website Enquiry - " . $name;
    $mail->Body    = $bodyHtml;
    $mail->AltBody = $bodyText;

    $mail->send();
    echo json_encode(["success" => true, "message" => "Thank you! Your enquiry has been submitted successfully."]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Unable to submit your enquiry. Please try again. Error: {$mail->ErrorInfo}"]);
}
