import ClientMongo from "@/lib/clientMongo";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        const client = await ClientMongo;
        const collection = client.db("prompt").collection("product");
        console.log(req.body);
        const body = req.body;
        const doc = { 
            type: body.type,
            name: body.name,
            description: body.description,
            price: body.price,
            prompt: body.prompt,
            instuction: body.instuction,
            description2: body.description2,
            images: body.images,
            categories:'test'
        };
        const result = await collection.insertOne(doc);
        console.log(
        `${result.insertedCount} document was inserted with the _id: ${result.insertedId}`,
        );
        
        res.status(200).json({ message: result.insertedId})

      } else {
        // Handle any other HTTP method
        res.status(200).json({ message: 'Welcome to API Routes!'})
      }

    // res.status(200).json({ name: 'John Doe' })
  }
  