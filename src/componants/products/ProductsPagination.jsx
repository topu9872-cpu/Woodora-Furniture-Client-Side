import { Pagination } from "@heroui/react";
import React, { useState } from "react";

const ProductsPagination = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="mt-10">
      <Pagination className="justify-center">
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous
              isDisabled={page === 1}
              onPress={() => setPage((p) => p - 1)}
            >
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Pagination.Item key={p}>
              <Pagination.Link
                isActive={p === page}
                onPress={() => setPage(p)}
                className={`text-white ${
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
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
};

export default ProductsPagination;
