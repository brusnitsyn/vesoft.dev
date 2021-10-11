<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class App extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'developer',
        'architecture',
        'language',
        'version',
        'compatibility',
        'activation',
        'size',
        'short_description',
        'full_description',
        'web_site',
        'placeholder_url',
        'icon_url',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(AppCategory::class, 'category_id');
    }
}
