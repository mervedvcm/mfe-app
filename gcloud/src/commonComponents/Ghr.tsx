import React, { useEffect, useRef } from "react";
import { mount } from "ghr/GhrIndex";
import { ghrRoutingPrefix } from "../routing/constants";
import { useLocation, useNavigate } from "react-router-dom";

const ghrBasename = `/${ghrRoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Listen to navigation events dispatched inside app1 mfe.
  useEffect(() => {
    const ghrNavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${ghrBasename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[ghr] navigated", ghrNavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[ghr] navigated",
        ghrNavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(ghrBasename)) {
        window.dispatchEvent(
          new CustomEvent("[gcloud] navigated", {
            detail: location.pathname.replace(ghrBasename, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount app1 MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          ghrBasename,
          ''
        ),
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="ghr-mfe" />;
};
