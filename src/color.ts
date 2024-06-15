import * as chroma from 'chroma-js'

export class Color {

    constructor(private color: chroma.Color) {}

    brighten(value: number = 10){
        return new Color(this.color).brighten(value)
    }

    darken(value: number = 10){
        return new Color(this.color).darken(value)
    }

    rgb() {
        return this.color.rgb()
    }

    rgba() {
        return this.color.rgba()
    }
}