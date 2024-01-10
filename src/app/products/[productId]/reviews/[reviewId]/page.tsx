export default function ReviewId({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div>
      <h1>
        Review {params.productId} for product {params.reviewId}
      </h1>
    </div>
  );
}
