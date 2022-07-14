import axios from 'axios';

const url =  `http://34.245.213.76:3000/`;
export async function login(username, password) { 
    const response = await axios.post(`${url}auth/signin`, {username, password}); 
    const token = response.data.accessToken;
    return token;  
  }
export async function fetchArticles(token, page) {
   const response = await axios.get(`${url}articles?page=${page}`, 
   {headers: {'Content-Type': 'application/json', Accept: 'application/json', Authorization: `Bearer ${token}`} });
   const articles = [];
   for (const key in response.data.response.docs) 
   { const articleObj = {
    id:response.data.response.docs[key]._id, 
    abstract:response.data.response.docs[key].abstract,
   // snippet:response.data.response.docs[key].snippet,
    //leadParagraph:response.data.response.docs[key].lead_paragraph,
    //source:response.data.response.docs[key].source,
    headline:response.data.response.docs[key].headline.main,
    imageUrl: response.data.response.docs[key].multimedia[0]?'https://static01.nyt.com/'+response.data.response.docs[key].multimedia[0].url:'null',
    publishedDate:response.data.response.docs[key].pub_date, 
    //documentType: response.data.response.docs[key].document_type, 
    sectionName:response.data.response.docs[key].section_name,
    author: response.data.response.docs[key].byline.original, 
    //wordCount: response.data.response.docs[key].word_count,
   }

 articles.push(articleObj);
  }
   return articles;
  }

