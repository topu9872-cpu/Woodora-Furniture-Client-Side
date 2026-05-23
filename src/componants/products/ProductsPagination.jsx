import { Pagination } from "@heroui/react";

const ProductsPagination = ({ page, setPage, totalPages }) => {
  return (
    <div className="mt-10 flex justify-center overflow-x-auto px-2">
      <div className="flex items-center gap-2 min-w-max">
        <Pagination>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                onPress={() => setPage((p) => p - 1)}
              >
                Prev
              </Pagination.Previous>
            </Pagination.Item>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => setPage(p)}
                  className={`text-white px-3 py-1 rounded-md ${
                    p === page ? "bg-[#ec9751]" : "bg-gray-500"
                  }`}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}

            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}
                onPress={() => setPage((p) => p + 1)}
              >
                Next
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductsPagination;