"use client";
import React, { Fragment, useEffect, useState } from "react";
import ReviewAddModal from "../components/ui/review-add-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Fragment>
      <ReviewAddModal />
    </Fragment>
  );
};

export default ModalProvider;
