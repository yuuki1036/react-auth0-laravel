<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        "userId",
        "displayName",
        "userName",
        "emailVerified",
        "avatar",
        "type",
        "content",
        "image",
        "replay",
        "retweet",
        "likes",
        "replayIds",
        "retweetIds",
        "likesIds",
    ];
}
