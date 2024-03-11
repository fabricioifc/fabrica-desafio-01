use rocket::http::Status;

use crate::use_cases::api::TmdbApi;
use serde::Serialize;
use serde_json::json;

use serde_json::Value;

#[derive(Serialize)]
struct Item {
    title: String,
    overview: String,
    poster_path: String,
    backdrop_path: String,
    adult: bool,
    release_date: String,
    genre_ids: Vec<i32>,
    popularity: f64
}

#[get("/<content_type>/<category>/<lang>/<id>")]
pub async fn get(content_type: String, category: String, lang: String, id: i32) -> Result<String, Status> {
    
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRiY2I1NWFhNmVmYzBhMDAzNWRiZjkwODQ1YThmZSIsInN1YiI6IjYxNzAwOTkwYTA5N2RjMDA0MjY3OWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qssDtNu-x6lHkMzfXJqbk1Ue2Jm-eVKgMBgjpCyC_mc";
    let tmdb_api = TmdbApi::new(token.to_string());
    let result = tmdb_api.get(content_type, category, lang, id).await;

    match result {
        Ok(body) => {
            
            // Ok(body)
            let json: Value = serde_json::from_str(&body).unwrap();
            let results = json["results"].as_array().unwrap();
            let mut items: Vec<Item> = Vec::new();
            for result in results {
                let title = result["title"].as_str().unwrap();
                let overview = result["overview"].as_str().unwrap();
                let poster_path = result["poster_path"].as_str().unwrap();
                let backdrop_path = result["backdrop_path"].as_str().unwrap();
                let adult = result["adult"].as_bool().unwrap();
                let release_date = result["release_date"].as_str().unwrap();
                let genre_ids = result["genre_ids"].as_array().unwrap();
                let popularity = result["popularity"].as_f64().unwrap();

                let item = Item {
                    title: title.to_string(),
                    overview: overview.to_string(),
                    poster_path: poster_path.to_string(),
                    backdrop_path: backdrop_path.to_string(),
                    adult: adult,
                    release_date: release_date.to_string(),
                    genre_ids: genre_ids.iter().map(|x| x.as_i64().unwrap() as i32).collect(),
                    popularity: popularity
                };

                items.push(item);
            }

            // let response = serde_json::to_string(&items).unwrap();
            let response = json!({
                "results": items,
                "total_pages": json["total_pages"],
                "total_results": json["total_results"]
            });

            Ok(response.to_string())
        },
        Err(_) => Err(Status::InternalServerError)
    }

}