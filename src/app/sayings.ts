export class Sayings {
    id:number;
    quote:string;
    upvote: number;
    downvotes:number;
constructor(id:number , quote:string, upvote: number,downvotes:number){
    this.id = id
    this.quote = quote
    this.upvote = upvote
    this.downvotes = downvotes
}
}
