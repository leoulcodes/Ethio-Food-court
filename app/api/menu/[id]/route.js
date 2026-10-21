

// export async function GET(){

//     return new Response("doro-wat")
// }

// export async function GET() {
   
//     const {id} = await params;
//     return new Response("${id}")
// }


// import { getDishes } from "@/lib/menu";

export async function GET(request) {
//   const { id } = await params;

//   const dishes = await getDishes();

//   const dish = dishes.find(
//     (item) => String(item.id) === id
//   );

//   if (!dish) {
//     return Response.json(
//       { message: "Dish not found" },
//       { status: 404 }
//     );
//   }

//   return Response.json(dish);

    return new Response("no data loaded")
}
