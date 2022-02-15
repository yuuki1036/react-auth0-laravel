<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    // 全公開tweet取得
    public function getPublicAll()
    {
        $posts = DB::table('posts')
            ->where('public', '=', true)
            ->latest('created_at')
            ->get();
        return response()->json($posts, 200);
    }

    // 非公開tweet取得
    public function getPrivateAll()
    {
        $posts = DB::table('posts')
            ->where('public', '=', false)
            ->latest('created_at')
            ->get();
        return response()->json($posts, 200);
    }

    // post作成
    public function create(Request $request)
    {
        // $post->userId = $request->userId;
        // $post->displayName = $request->displayName;
        // $post->userName = $request->userName;
        // $post->emailVerified = $request->emailVerified;
        // $post->avatar = $request->avatar;
        // $post->type = $request->type;
        // $post->content = $request->content;
        // $post->image = $request->image;
        // $post->replay = $request->replay;
        // $post->retweet = $request->retweet;
        // $post->likes = $request->likes;
        // $post->replayIds = $request->replayIds;
        // $post->retweetIds = $request->retweetIds;
        // $post->likesIds = $request->likesIds;
        Post::create($request->all());
        return response()->json("OK", 200);
    }

    // post作成
    public function retweet(Request $request)
    {
        $post = Post::find($request->id);
        $retweet = $post->replicate();
        $retweet->type = "retweet";
        $retweet->replay = 0;
        $retweet->retweet = 0;
        $retweet->likes = 0;
        $retweet->replayIds = "";
        $retweet->retweetIds = "";
        $retweet->likesIds = "";
        $retweet->replayTo = "";
        $retweet->retweetBy = $request->userName;
        $retweet->save();
        // retweet カウントアップ
        $this->updateReTweetUp($request->id, $request->userId);
        return response()->json("OK", 200);
    }

    // 最新データ問い合わせ
    public function reload(Request $request)
    {
        $posts = DB::table('posts')->where('created_at', '>', $request->latest)->get();
        return response()->json($posts, 200);
    }



    // like を増やす
    public function updateLikesUp(Request $request)
    {
        $post = Post::find($request->id);
        $post->likes += 1;
        $post->likesIds = $this->addUserId($post->likesIds, $request->userId);
        $post->save();
        return response()->json("OK", 200);
    }

    // like を減らす
    public function updateLikesDown(Request $request)
    {
        $post = Post::find($request->id);
        $post->likes -= 1;
        $post->likesIds = $this->removeUserId($post->likesIds, $request->userId);
        $post->save();
        return response()->json("OK", 200);
    }

    // like を増やす
    public function updateReTweetUp($id, $userId)
    {
        $post = Post::find($id);
        $post->retweet += 1;
        $post->retweetIds = $this->addUserId($post->retweetIds, $userId);
        $post->save();
    }

    public function addUserId($arrayString, $id)
    {
        if ($id === "44hJcni36xHwbcPHtKTa") return $arrayString;
        if ($arrayString === "") {
            $arrayString = $id;
        } else {
            $array = explode(',', $arrayString);
            $array[] = $id;
            $arrayString = implode(",", $array);
        }
        return $arrayString;
    }

    public function removeUserId($arrayString, $id)
    {
        if ($id === "44hJcni36xHwbcPHtKTa") return $arrayString;
        if ($arrayString !== "") {
            $array = explode(',', $arrayString);
            $array = array_values(array_diff($array, [$id]));
            $arrayString = implode(",", $array);
        }
        return $arrayString;
    }



}
