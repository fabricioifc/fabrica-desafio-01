use reqwest;
use rocket::http::Status;

pub struct TmdbApi {
    token: String,
}

impl TmdbApi {
    pub fn new(token: String) -> TmdbApi {
        TmdbApi {
            token,
        }
    }

    pub async fn get(&self, category: String, content_type: String, lang: String, id: i32) -> Result<String, Status> {
        let mut url = String::from("https://api.themoviedb.org/3/");
        let endpoint = format!("{}/{}?language={}&page={}", content_type, category, lang, id);
        url.push_str(&endpoint);

        let client = reqwest::Client::new();
        let res = client.get(&url)
            .header("Authorization", format!("Bearer {}", self.token))
            .send()
            .await
            .map_err(|_| Status::InternalServerError)?;

        if res.status().is_success() {
            let body = res.text().await.map_err(|_| Status::InternalServerError)?;
            Ok(body)
        } else {
            Err(Status::InternalServerError)
        }
    }
}

// https://image.tmdb.org/t/p/original/meyhnvssZOPPjud4F1CjOb4snET.jpg



// #[get("/<category>/<lang>/<id>")]
// pub async fn get(category: String, lang: String, id: i32) -> Result<String, Status> {

//     let mut url = String::from("https://api.themoviedb.org/3/");
//     let endpoint = format!("{}/popular?language={}&page={}", category, lang, id);
//     url.push_str(&endpoint);

//     let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRiY2I1NWFhNmVmYzBhMDAzNWRiZjkwODQ1YThmZSIsInN1YiI6IjYxNzAwOTkwYTA5N2RjMDA0MjY3OWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qssDtNu-x6lHkMzfXJqbk1Ue2Jm-eVKgMBgjpCyC_mc";
//     let client = reqwest::Client::new();
//     let res = client.get(&url)
//         .header("Authorization", format!("Bearer {}", token))
//         .send()
//         .await
//         .map_err(|_| Status::InternalServerError)?;

//     if res.status().is_success() {
//         let body = res.text().await.map_err(|_| Status::InternalServerError)?;
//         Ok(body)
//     } else {
//         Err(Status::InternalServerError)
//     }
// }