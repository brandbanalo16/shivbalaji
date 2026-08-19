"use client";
import { useEffect, useState } from "react";


export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 3000); // show for 3 seconds

  return () => clearTimeout(timer);
}, []);

  if (!loading) return null;

  return (
    <div className="loader-wrap">
      <div className="preloader">
          <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">
                  <div className="load-inner">
                      <div className="spinner"></div>
                      <div className="txt-loading">
                          <span data-text-preloader="s" className="letters-loading">
                              s
                          </span>
                          <span data-text-preloader="h" className="letters-loading">
                              h
                          </span>
                          <span data-text-preloader="i" className="letters-loading">
                              i
                          </span>
                          <span data-text-preloader="v" className="letters-loading">
                              v
                          </span>
                         <span className="letters-loading space">&nbsp;</span>
                          <span data-text-preloader="B" className="letters-loading">
                              B
                          </span>
                          <span data-text-preloader="a" className="letters-loading">
                                a
                          </span>
                          <span data-text-preloader="l" className="letters-loading">
                              l
                          </span>
                          <span data-text-preloader="a" className="letters-loading">
                              a
                          </span>
                          <span data-text-preloader="j" className="letters-loading">
                              j
                          </span>
                          <span data-text-preloader="i" className="letters-loading">
                                i
                          </span>
                        <span data-text-preloader=" " className="letters-loading">
                                &nbsp;
                        </span>
                        <span data-text-preloader="S" className="letters-loading">
                              S
                          </span>
                          <span data-text-preloader="u" className="letters-loading">
                                u
                          </span>
                          <span data-text-preloader="r" className="letters-loading">
                              r
                          </span>
                          <span data-text-preloader="g" className="letters-loading">
                              g
                          </span>
                          <span data-text-preloader="i" className="letters-loading">
                              i
                          </span>
                          <span data-text-preloader="c" className="letters-loading">
                                c
                          </span>
                          <span data-text-preloader="a" className="letters-loading">
                              a
                          </span>
                          <span data-text-preloader="l" className="letters-loading">
                                l
                          </span>
                      </div>
                  </div>
              </div>  
          </div>
      </div>
  </div>
  );
}
