export default async function sitemap() {  
    const baseUrl = 'https://yourwebsite.com'; 
     // 1. Define static routes   
     const staticRoutes = [   
         {     
             url: baseUrl,      
             lastModified: new Date(),      
             changeFrequency: 'yearly',      
             priority: 1.0,    
            },    
            {      
            url: `${baseUrl}/about`,      
            lastModified: new Date(),      
            changeFrequency: 'monthly',      
            priority: 0.8,    
            },    
            {      
            url: `${baseUrl}/contact`,      
            lastModified: new Date(),      
            changeFrequency: 'yearly',      
            priority: 0.5,    
            },  
            ];  
            // 2. (Optional) Fetch dynamic routes from an API or Database  // Example: fetching blog posts  
            let dynamicRoutes = [];  
            try {
                const response = await fetch('https://api.yourwebsite.com/posts');    
                const posts = await response.json();    
                dynamicRoutes = posts.map((post) => ({      
                    url: `${baseUrl}/blog/${post.slug}`,
                    lastModified: new Date(post.updatedAt),      
                    changeFrequency: 'weekly',      
                    priority: 0.7,    
                    }));  
                } catch (error) {    
                    console.error('Failed to fetch dynamic sitemap routes:', error); 
                 }
                   // 3. Combine and return all routes  
                return [...staticRoutes, ...dynamicRoutes];}