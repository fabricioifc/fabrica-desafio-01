#[macro_use] extern crate rocket;

mod use_cases;

use use_cases::fetch::get as index;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
        // .mount("/popular", routes![gpopular])
}