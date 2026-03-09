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
        Schema::create('animes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('studio')->nullable();
            $table->string('theme')->nullable();
            $table->string('tags')->nullable();
            $table->string('source')->nullable();
            $table->float('rating')->nullable();
            $table->integer('year')->nullable();
            $table->text('synopsis')->nullable();
            $table->string('demographic')->nullable();
            $table->string('status')->nullable();
            $table->float('eps')->nullable();
            $table->float('eps_avg_duration_in_min')->nullable();
            $table->integer('rated_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animes');
    }
};
