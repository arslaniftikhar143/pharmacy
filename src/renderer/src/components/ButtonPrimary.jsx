export default function ButtonPrimary({ children, ...props }) {
  return (
    <div className="container__home__card__footer__button">
      <button {...props}>{children}</button>
    </div>
  );
}
