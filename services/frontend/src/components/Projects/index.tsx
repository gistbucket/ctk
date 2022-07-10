import { useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS_FETCH_LIMIT } from "../../constants";
import { IProject } from "../../types";
import Spinner from "../../components/global/Spinner";
import PreviewBlock from "./PreviewBlock";
import { useProjects } from "../../hooks/useProjects";

const Projects = () => {
  const [limit] = useState(PROJECTS_FETCH_LIMIT);
  const [offset, setOffset] = useState(0);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useProjects(limit, offset);

  return (
    <>
      <div className="md:pl-16 flex flex-col flex-1">
        <main>
          <div className="py-6">
            <div className="flex justify-between px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold dark:text-white text-gray-900">
                Projects
              </h1>

              <Link
                className="btn-util text-white bg-blue-600 hover:bg-blue-700 sm:w-auto"
                to="/projects/new"
              >
                <span>New</span>
              </Link>
            </div>

            <div className="px-4 sm:px-6 md:px-8">
              {isFetching && (
                <div className="flex justify-center items-center mx-auto mt-10">
                  <Spinner className="w-6 h-6 text-blue-600" />
                </div>
              )}

              {!isFetching && (
                <>
                  <div className="py-4">
                    {error && (
                      <div className="text-center">
                        <h3 className="mt-12 text-sm font-medium text-gray-900 dark:text-white">
                          Something went wrong...
                        </h3>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {data.results.length > 0 &&
                        data.results.map((project: IProject) => {
                          return (
                            <div key={`${project.uuid}`}>
                              <PreviewBlock project={project} />
                            </div>
                          );
                        })}
                    </div>

                    {data.results.length === 0 && (
                      <div className="text-center">
                        <h3 className="mt-12 text-sm font-medium text-gray-900 dark:text-white">
                          Nothing here
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Get started by creating a project.
                        </p>
                      </div>
                    )}
                  </div>

                  {data.count > PROJECTS_FETCH_LIMIT && (
                    <div className="flex justify-center space-x-1 my-4">
                      <button
                        className={`
                          text-xs border-dotted border-b
                          ${
                            !data.previous
                              ? "text-gray-500 border-gray-500"
                              : "text-blue-600 border-blue-600"
                          }
                        `}
                        onClick={() =>
                          setOffset((old) =>
                            Math.max(old - PROJECTS_FETCH_LIMIT, 0)
                          )
                        }
                        disabled={!data.previous}
                      >
                        Previous
                      </button>
                      <button
                        className={`
                          text-xs border-dotted border-b
                          ${
                            !data.next
                              ? "text-gray-500 border-gray-500"
                              : "text-blue-600 border-blue-600"
                          }
                        `}
                        onClick={() => {
                          if (!isPreviousData && data.next) {
                            setOffset((old) => old + PROJECTS_FETCH_LIMIT);
                          }
                        }}
                        disabled={isPreviousData || !data.next}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;
