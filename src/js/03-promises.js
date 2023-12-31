import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = { form: document.querySelector('.form') };

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  let delay = Number(form.elements.delay.value);
  const delayStep = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStep;
  }
}

function createPromise(position, delay) {
  const object = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(object);
      } else {
        reject(object);
      }
    }, delay);
  });
}
