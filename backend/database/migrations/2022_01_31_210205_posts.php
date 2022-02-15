<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Posts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
          $table->id();
          $table->string('userId', 100);
          $table->string('displayName', 40);
          $table->string('userName', 40);
          $table->boolean('emailVerified');
          $table->text('avatar')->nullable();
          $table->string('type', 10);
          $table->boolean('public');
          $table->string('content', 280);
          $table->binary('image')->nullable();
          $table->integer('replay')->default(0);
          $table->integer('retweet')->default(0);
          $table->integer('likes')->default(0);
          $table->longText('replayIds')->nullable();
          $table->longText('retweetIds')->nullable();
          $table->longText('likesIds')->nullable();
          $table->string('replayTo', 40)->nullable();
          $table->string('retweetBy', 40)->nullable();
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
