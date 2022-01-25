import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../components/Layout';

export default function index({ data }) {
  return (
    <Layout>
       <h1>Lista de Post</h1>
       {
           data.map(({id, title, body}) => (
                <div key={id}>
                    <h3>
                        <Link href={`/blog/${id}`}>
                            <a>{id}- {title}</a>
                        </Link>
                    </h3>
                    <p>{body}</p>
                </div>
           ))
       } 
    </Layout>
    );
}

export async function getStaticProps () {
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/posts')
        const data = await res.json();

        return {
            props: {
                data
            }
        }
    }catch (error) {
        console.log(error)
    }
}