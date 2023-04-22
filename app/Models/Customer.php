<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'mailing_address',
        'billing_address',
        'date_of_birth',
        'gender',
        'occupation',
        'company_name',
        'industry',
        'customer_type',
        'referral_source',
        'payment_method',
        'order_number',
    ];

}
