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
          $table->text('avatar');
          $table->string('type', 10);
          $table->string('content', 280);
          $table->binary('image')->nullable();
          $table->integer('replay');
          $table->integer('retweet');
          $table->integer('likes');
          $table->longText('replayIds');
          $table->longText('retweetIds');
          $table->longText('likesIds');
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
