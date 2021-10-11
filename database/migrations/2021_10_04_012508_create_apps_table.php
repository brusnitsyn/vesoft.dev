<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apps', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('developer');
            $table->string('architecture');
            $table->string('language');
            $table->string('version');
            $table->string('compatibility');
            $table->string('activation');
            $table->string('size');
            $table->string('short_description');
            $table->json('full_description');
            $table->string('web_site');
            $table->string('placeholder_url');
            $table->string('icon_url');
            $table->unsignedBigInteger('category_id');
            //$table->string('whats_new')->default('Примечания к выпуску недоступны на момент публикации.');
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('app_categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apps');
    }
}
