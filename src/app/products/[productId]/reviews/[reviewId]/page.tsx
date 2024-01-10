import { notFound } from "next/navigation";

export default function ReviewId({
  params,
}: {
  params: { productId: string; reviewId: string };
  }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound()
  }
  return (
    <div>
      <h1>
        Review {params.productId} for product {params.reviewId}
      </h1>
    </div>
  );
}
