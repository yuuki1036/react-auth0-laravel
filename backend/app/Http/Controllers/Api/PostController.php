<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // 全post取得
    public function getAll()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
