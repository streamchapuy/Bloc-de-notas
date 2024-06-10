import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'emoticonToEmoji'
})

export class EmoticonToEmojiPipe implements PipeTransform {
    transform(value: string): string {
        value = value.replace(/:\)/g, '😀');
        value = value.replace(/:D/g, '😁');
        value = value.replace(/:jaja:/g, '😂');
        value = value.replace(/:B/g, '😎');
        value = value.replace(/:like:/g, '👍');
        value = value.replace(/<3/g, '❤');
        value = value.replace(/;\)/g, '😉');
        value = value.replace(/:fire:/g, '🔥');
        value = value.replace(/:cash:/g, '💵');
        value = value.replace(/:ok:/g, '👌');
        value = value.replace(/:sabe:/g, '(☞ﾟヮﾟ)☞');



        return value;
    }
}