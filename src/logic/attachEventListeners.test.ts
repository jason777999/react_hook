import attachEventListeners from './attachEventListeners';

describe('attachEventListeners', () => {
  it('should attach change event for radio and return undefined', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: [],
        name: 'test',
      },
    };

    expect(
      attachEventListeners({
        isOnBlurMode: false,
        isRadio: true,
        // @ts-ignore
        field: fields.test,
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('change', validateAndStateUpdate);
    expect(fields.test.eventAttached).toBeTruthy();
  });

  it('should attach on change event on radio type input when it is watched', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: [],
        watch: true,
      },
    };

    expect(
      attachEventListeners({
        // @ts-ignore
        isOnBlurMode: false,
        field: fields.test,
        isRadio: true,
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('change', validateAndStateUpdate);
    expect(fields.test.eventAttached).toBeTruthy();
  });

  it('should attach input event on none radio type input', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          addEventListener,
          name: 'test',
        },
        eventAttached: [],
      },
    };

    expect(
      attachEventListeners({
        // @ts-ignore
        isOnBlurMode: false,
        field: fields.test,
        isRadio: false,
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('input', validateAndStateUpdate);
    expect(fields.test.eventAttached).toBeTruthy();
  });

  it('should attach input event on none radio type input when it is watched', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          name: 'test',
          addEventListener,
        },
        eventAttached: [],
        watch: true,
      },
    };

    expect(
      attachEventListeners({
        // @ts-ignore
        isOnBlurMode: false,
        field: fields.test,
        isRadio: false,
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('input', validateAndStateUpdate);
    expect(fields.test.eventAttached).toBeTruthy();
  });

  it('should attach on blur event on radio type input', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: [],
      },
    };

    expect(
      attachEventListeners({
        // @ts-ignore
        isOnBlurMode: false,
        field: fields.test,
        isRadio: true,
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('change', validateAndStateUpdate);
    expect(fields.test.eventAttached).toBeTruthy();
  });

  it('should attach input event on none radio type input', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          name: 'test',
          addEventListener,
        },
        eventAttached: [],
      },
    };

    expect(
      attachEventListeners({
        // @ts-ignore
        isOnBlurMode: false,
        field: fields.test,
        isRadio: false,
        // @ts-ignore
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).toBeCalledWith('input', validateAndStateUpdate);
    expect(fields.test.eventAttached).toBeTruthy();
  });

  it('should not attach input event on none radio type input and isOnBlurMode enabled', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          name: 'test',
          addEventListener,
        },
        eventAttached: [],
      },
    };

    expect(
      attachEventListeners({
        // @ts-ignore
        isOnBlurMode: true,
        field: fields.test,
        isRadio: false,
        // @ts-ignore
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).not.toBeCalledWith('input', validateAndStateUpdate);
  });

  it('should not attach input event on radio type input and isOnBlurMode enabled', () => {
    const validateAndStateUpdate = jest.fn();
    const addEventListener = jest.fn();
    const fields = {
      test: {
        ref: {
          addEventListener,
        },
        eventAttached: [],
        name: 'test',
      },
    };

    expect(
      attachEventListeners({
        isOnBlurMode: true,
        isRadio: true,
        // @ts-ignore
        field: fields.test,
        validateAndStateUpdate,
      }),
    ).toBeUndefined();

    expect(addEventListener).not.toBeCalledWith('change', validateAndStateUpdate);
  });
});
