<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            
            $table->bigIncrements('id')->unique()->from(6000);
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique()->nullable();
            $table->integer('phone_number')->nullable();
            $table->string('mailing_address')->nullable();
            $table->string('billing_address')->nullable();
            $table->string('date_of_birth')->nullable();
            $table->string('gender')->nullable();
            $table->string('occupation')->nullable();
            $table->string('company_name')->nullable();
            $table->string('industry')->nullable();
            $table->string('customer_type')->nullable();
            $table->string('referral_source')->nullable();
            $table->string('p_history')->nullable();
            $table->string('payment_method')->nullable();
            $table->integer('order_number')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
