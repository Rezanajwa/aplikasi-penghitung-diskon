<?php

class DiscountCalculator {
    public static function calculateDiscount($price, $discount) {
        $discountAmount = $price * ($discount / 100);
        $discountedPrice = $price - $discountAmount;

        return $discountedPrice;
    }
}

if(isset($_POST['price']) && isset($_POST['discount'])) {
    $price = floatval($_POST['price']);
    $discount = floatval($_POST['discount']);

    $result = DiscountCalculator::calculateDiscount($price, $discount);
    echo json_encode(['result' => $result]);
}

?>
