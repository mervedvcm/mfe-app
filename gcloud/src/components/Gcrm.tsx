import React, { useEffect, useRef } from "react";
import { mount } from "gcrm/GcrmIndex";
import { gcrmRoutingPrefix } from "../routing/constants";
import { useLocation, useNavigate } from "react-router-dom";

const gcrmBasename = `/${gcrmRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside gcrm mfe.
  useEffect(() => {
    const gcrmNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${gcrmBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[gcrm] navigated", gcrmNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[gcrm] navigated",
        gcrmNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for gcloud location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(gcrmBasename)) {
        window.dispatchEvent(
          new CustomEvent("[gcloud] navigated", {
            detail: location.pathname.replace(gcrmBasename, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount ghr MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          gcrmBasename,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);


  return <div ref={wrapperRef} id="gcrm-mfe" />;
};
