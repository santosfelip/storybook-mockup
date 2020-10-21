import ButtonComponent from './button.component';

describe('Button', function () {
    it('Checks whether the button is primary', function () {
        const primary = new ButtonComponent;
        expect(primary.primary).toBe(false);
    });

});
