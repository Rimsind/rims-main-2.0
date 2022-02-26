const ListPagination = () => {
  return (
    <>
      <div className="list-pagination">
        <nav>
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a
                className="page-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>

            <li className="page-item">
              <a className="page-link active" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ListPagination;
