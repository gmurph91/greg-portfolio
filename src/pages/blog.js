import React, {Component} from 'react';
const axios = require('axios');


export default class blog extends Component {
  state={
    loading: true,
  }

  componentDidMount() {
    this.loading()
    this.getBlogPosts()
  }

  loading = () => {
    var element = document.getElementById("loadingIcon")
    if (this.state.loading) {
      element.classList.remove("hidden")
    } else {
      element.classList.add("hidden")
    }
  }

  getBlogPosts = async () => {
    try {
      const response = await axios.get(`https://gregapis.herokuapp.com/blog`);
      this.setState({
              blog: await response.data,
              loading: false,
            })
        this.loading()
    } catch (err) {
      console.error(err);
    }
  }

  blogMap = () => {
    try{
    var posts=this.state.blog
          return posts.map((item, i) =>
                <div key={i} className="blogPost">
                <div className="blogHeader">
                    <h4>{this.state.blog[i].title}</h4>
                </div>
                <p className="blogParagraph">{this.state.blog[i].post}</p>
                </div>
          )
    }catch (err){}}
    
    render(){
        return(
    <div className="blog">
      <div className="return"><a href="/" className="returnHome">Return</a></div>
                {this.blogMap()}
                <img id="loadingIcon" src="loading.gif" alt="loading"/>
    </div>
        )}
} 