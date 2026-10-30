

export default function robots() {  
    return {  
          rules: {     
             userAgent: '*',    
               allow: '/',     
                disallow: '/dashboard/',    
            },   
             sitemap: 'https://example.com/sitemap.xml',  
            }
        }
             // User-Agent: *// Allow: /// Disallow: /private/// Sitemap: https://example.com/sitemap.xml