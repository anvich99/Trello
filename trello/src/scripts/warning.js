export function showWarning() {
  if (!document.querySelector(".modalContainer")) {
    const modalContainer = document.createElement("div");
    modalContainer.classList.add("warning");
    const modalBackdrop = document.createElement("div");
    modalBackdrop.classList.add("warning-bg");
    modalContainer.appendChild(modalBackdrop);
    const modalContent = document.createElement("div");
    modalContent.textContent = "Пожалуйста, выполните предыдущие задачи";
    modalContent.classList.add("warning-block");
    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);
    const modalButton = document.createElement("div");
    modalButton.classList.add("warning-block-btns");
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("warning-block-btns__cancel");
    cancelButton.textContent = "Продолжить";
    cancelButton.addEventListener("click", () => {
      modalContainer.remove();
    });
    // const confirmButton = document.createElement("button");
    // confirmButton.classList.add("warning-block-btns__confirm");
    // confirmButton.textContent = "Confirm";
    // confirmButton.addEventListener("click", () => {
    //   modalContainer.remove();
    // });
    modalContent.appendChild(modalButton);
    modalButton.appendChild(cancelButton);
    modalButton.appendChild(confirmButton);
  }
}
