import { Book } from "@/app/types/BookType";
import cheerio from "cheerio"
import { cache } from "react";


export async function GET(request: Request) {

    const response = await fetch(`https://www.kitapyurdu.com/cok-satan-kitaplar/haftalik/1.html`, {cache:"no-store"})

    const html = await response.text();

    const $ = cheerio.load(html);

    let books: Book[] = [];

    $(".product-cr").each((index,element) => {
        const id = Number(element.attribs.id.slice(8,));
        const name = $(".name.ellipsis a span",element).text();
        const author = $(".author span a span",element).text().replace(" ","");
        const price =parseFloat($(".price .price-new .value",element).text().replace(" ","").replace(",","."))
        const image = $(".image .cover a img",element).attr("src");
        const url =$(".image .cover a",element).attr("href");

        books.push({id,name,author,price,image,url})
    })

    return new Response(JSON.stringify(books));
}


