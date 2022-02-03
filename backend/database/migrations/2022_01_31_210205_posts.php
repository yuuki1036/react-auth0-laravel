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
          $table->integer('userId');
          $table->string('userName', 20);
          $table->string('content', 40);
          $table->string('type', 10);
          $table->integer('replay');
          $table->integer('retweet');
          $table->integer('likes');
          $table->text('replayIds');
          $table->text('retweetIds');
          $table->text('likesIds');
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
