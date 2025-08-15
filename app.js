// app.js

// Данные треков
const tracks = {
    '1': {
        title: 'No one noticed',
        artist: 'The Marias',
        image: 'https://avatars.mds.yandex.net/i?id=a3b036bcdd2d49eb7a42cd3f220f0d15f0f1af8f-5180074-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/2nqd32.mp3',
        duration: 204,
        lyrics: [
          { text: "Maybe I", time: 0 },
            { text: "Lost my mind", time: 5 },
            { text: "No one noticed", time: 10 },
            { text: "No one noticed", time: 15 },
            { text: "It's getting old (I'd kinda like it if you'd call me)", time: 20 },
            { text: "May have lost it (I need a virtual connection)", time: 30 },
            { text: "I have lost it (Be my video obsession)", time: 35 },
            { text: "No one tried", time: 59 },
            { text: "To read my eyes", time: 63 },
            { text: "No one but you", time: 69 },
            { text: "Wish it weren't true", time: 74 },
            { text: "Maybe I (I'd kinda like it if you'd call me)", time: 79 },
            { text: "It's not right ('Cause I'm so over bein' lonely)", time: 84 },
            { text: "Make you mine (I need a virtual connection)", time: 88 },
            { text: "Take our time (Be my video obsеssion)", time: 94 },
            { text: "Come on, don't leave mе, it can't be that easy, babe", time: 99 },
            { text: "If you believe me, I guess I'll get on a plane", time: 105 },
            { text: "Fly to your city, excited to see your face", time: 110 },
            { text: "Hold me, console me, and then I'll leave without a trace", time: 114 },
            { text: "Come on, don't leave me, it can't be that easy, babe", time: 120 },
            { text: "If you believe me, I guess I'll get on a plane", time: 125 },
            { text: "Fly to your city, excited to see your face", time: 129 },
            { text: "Hold me, console me, then I'll leave without a trace", time: 134 },
            { text: "Come on, don't leave me, it can't be that easy, babe", time: 139 },
            { text: "If you believe me, I guess I'll get on a plane", time: 144 },
            { text: "Fly to your city, excited to see your face", time: 148 },
            { text: "Hold me, console me, and then I'll leave without a trace", time: 153 },
            { text: "(Maybe I)  Come on, don't leave me, it can't be that easy, babe", time: 156 },
            { text: "(It's not right) If you believe me, I guess I'll get on a plane", time: 162 },
            { text: "(Make you mine) Fly to your city, excited to see your face", time: 168 },
            { text: "(Take our time) Hold me, console me, and then I'll leave without a trace", time: 173 },
            { text: "I'd kinda like it if you'd call me", time: 199 },
            { text: "(It's not right) 'Cause I'm so over bein' lonely", time: 203 },
            { text: "(Make you mine) I need a virtual connection", time: 208 },
            { text: "(Take our time) Be my video obsession", time: 214 },
        ],
        translations: [
            { text: "Может быть, я", time: 0 },
            { text: "Сошла с ума", time: 5 },
            { text: "Никто не заметил", time: 10 },
            { text: "Никто не заметил", time: 15 },
            { text: "Мне это надоело (Было бы неплохо, если бы ты позвонил)", time: 20 },
            { text: "Быть одной (Потому что я устала от одиночества)", time: 30 },
            { text: "Возможно, я его потеряла (Мне нужна виртуальная связь)", time: 35 },
            { text: "Я его потеряла (Стань моей видеоодержимостью)", time: 59 },
            { text: "Никто не пытался", time: 63 },
            { text: "Прочесть мои глаза", time: 69 },
            { text: "Никто, кроме тебя", time: 74 },
            { text: "Жаль, что это не так", time: 79 },
            { text: "Может быть, я (Было бы неплохо, если бы ты позвонил)", time: 84 },
            { text: "Это неправильно (Потому что я устала от одиночества)", time: 88 },
            { text: "Сделаю тебя своим (Мне нужна виртуальная связь)", time: 94 },
            { text: "Не будем торопиться (Стань моей видеоодержимостью)", time: 99 },
            { text: "Давай же, не оставляй меня, это не может быть так просто, милый", time: 63 },
            { text: "Если ты мне веришь, думаю, я сяду в самолет", time: 105 },
            { text: "Прилечу в твой город, взволнованная увидеть твое лицо", time: 110 },
            { text: "Обними меня, утешь меня, а потом я исчезну без следа", time: 114 },
            { text: "Давай же, не оставляй меня, это не может быть так просто, милый", time:  120 },
            { text: "Если ты мне веришь, думаю, я сяду в самолет", time: 125 },
            { text: "Прилечу в твой город, взволнованная увидеть твое лицо", time: 129 },
            { text: "Обними меня, утешь меня, а потом я исчезну без следа", time: 134 },
            { text: "Давай же, не оставляй меня, это не может быть так просто, милый", time: 139 },
            { text: "Если ты мне веришь, думаю, я сяду в самолет", time: 144 },
            { text: "Прилечу в твой город, взволнованная увидеть твое лицо", time: 153 },
            { text: "Обними меня, утешь меня, а потом я исчезну без следа (может быть, я)", time: 156 },
            { text: "Давай же, не оставляй меня, это не может быть так просто, милый (это неправильно)", time: 162 },
            { text: "Если ты мне веришь, думаю, я сяду в самолет (сделаю тебя своим)", time: 168 },
            { text: "Прилечу в твой город, взволнованная увидеть твое лицо (не будем торопиться)", time: 173 },
            { text: "Обними меня, утешь меня, а потом я исчезну без следа", time: 199 },
            { text: "Было бы неплохо, если бы ты позвонил (это неправильно)", time: 203 },
            { text: "Потому что я устала от одиночества (сделаю тебя своим)", time: 208 },
            { text: "Мне нужна виртуальная связь (не будем торопиться)", time: 214 },
            { text: "Стань моей видеоодержимостью)", time: 214 }
        ],
        similar: ['2', '3', '4']
    },
    '2': {
        title: 'Forever',
        artist: 'IlyTOMMY',
        image: 'https://avatars.mds.yandex.net/i?id=e10d9bfd4cd146262fcaaaa8c938c7d52a42cf89-12421984-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/iumh1z.mp3',
        duration: 103,
        lyrics: [
            { text: "I want you to live, I want that more than anything in this world (forever in my mind, only you)", time: 5 },
            { text: "I want you to fight like hell to stay with us (the pieces in my life go away with you)", time: 10 },
            { text: "With everybody else, i know it might not be what you want (forever in my mind, only you)", time: 17 },
            { text: "It might be too hard for you to keep fighting so (the pieces in my life go away with you)", time: 21 },
            { text: "If you wanna go", time: 26 },
            { text: "I want you to know it's okay (forever in my mind, only you)", time: 28 },
            { text: "I was all alone, on my own, it's okay though", time: 30 },
            { text: "Do you really love me?", time: 33 },
            { text: "Do you really trust me?", time: 35 },
            { text: "I was down bad, feelin sad feelin sorry", time: 36 },
            { text: "Now you really gone, and i can't get you to call me", time: 39 },
            { text: "Wanna run away, fuck this love and fuck this place", time: 42 },
            { text: "If you was a ghost, i would kiss you anyway", time: 45 },
            { text: "I can't fill my lungs, feelin like i'm outer space", time: 48 },
            { text: "You're the one i love, but you're the one i hate", time: 51 },
            { text: "I can't really see you with anyone else", time: 54 },
            { text: "All these fuckin perkys not good for my health", time: 57 },
            { text: "Wanna end it all, i can't do this again", time: 60 },
            { text: "Tell her that i love her, she do it for him", time: 63 },
            { text: "I can't really see you with anyone else", time: 66 },
            { text: "All these fuckin perkys not good for my health", time: 69 },
            { text: "Wanna end it all, i can't do this again", time: 72 }, //
            { text: "Tell her that i love her, she do it for him", time: 75 },
            { text: "Forever in my mind, only you", time: 77 },//
            { text: "The pieces in my life go away with you", time: 83 },
            { text: "Forever in my mind, only you", time: 89 },
            { text: "The pieces in my life go away with you", time: 96 },
            { text: "Forever in my ", time: 101 },
        ],
        translations: [
        { text: "Я хочу, чтобы ты жил(а), я хочу этого больше всего на свете (навсегда в моих мыслях — только ты)", time: 5 },
            { text: "Я хочу, чтобы ты боролся изо всех сил, чтобы остаться с нами (части моей жизни уходят вместе с тобой)", time: 10 },
            { text: "Со всеми остальными... Я знаю, это может быть не то, чего ты хочешь (навсегда в моих мыслях — только ты)", time: 17 },
            { text: "Может быть, тебе слишком тяжело продолжать бороться (части моей жизни уходят вместе с тобой)", time: 21 },
            { text: "Если ты захочешь уйти", time: 26 },
            { text: "Я хочу, чтобы ты знал — это нормально (навсегда в моих мыслях — только ты)", time: 28 },
            { text: "Я был совсем один, сам по себе... но это нормально", time: 30 },
            { text: "Ты правда любишь меня?", time: 33 },
            { text: "Ты правда доверяешь мне?", time: 35 },
            { text: "Мне было очень плохо, я чувствовал грусть и жалость к себе", time: 36 },
            { text: "Теперь ты действительно ушла, и я не могу заставить тебя позвонить", time: 39 },
            { text: "Хочу убежать... к чёрту эту любовь и это место", time: 42 },
            { text: "Если бы ты был(а) призраком, я бы всё равно поцеловал(а) тебя", time: 45 },
            { text: "Я не могу вдохнуть... чувствую себя как в открытом космосе", time: 48 },
            { text: "Ты — тот(та), кого я люблю... но и тот(та), кого я ненавижу", time: 51 },
            { text: "Я не могу представить тебя с кем-то другим", time: 54 },
            { text: "Все эти чёртовы таблетки вредят моему здоровью", time: 57 },
            { text: "Хочу всё закончить... я не могу больше это терпеть", time: 60 },
            { text: "Скажи ей, что я люблю её, а она делает это ради него", time: 63 },
            { text: "Я не могу представить тебя с кем-то другим", time: 66 },
            { text: "Все эти чёртовы таблетки вредят моему здоровью", time: 69 },
            { text: "Хочу всё закончить... я не могу больше это терпеть", time: 72 }, //
            { text: "Скажи ей, что я люблю её, а она делает это ради него", time: 75 },
            { text: "Навсегда в моих мыслях — только ты", time: 77 },//
            { text: "Части моей жизни уходят вместе с тобой", time: 83 },
            { text: "Навсегда в моих мыслях — только ты", time: 89 },
            { text: "Части моей жизни уходят вместе с тобой", time: 96 },
            { text: "Навсегда в моём... ", time: 101 },
        ],
        similar: ['3', '23', '4']
    },
    '3': {
        title: 'Сердце',
        artist: 'Passmurny',
        image: 'https://avatars.mds.yandex.net/i?id=e946426773349bb7f5f56c5e50ce888a-3979407-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/1kk2fh.mp3',
        duration: 314,
        lyrics: [
            { text: "Твои глаза сверкают не для меня", time: 37 },
            { text: "Не для меня", time: 44 },
            { text: "Оставить всё, но это-не для меня", time: 49 },
            { text: "Не для меня", time: 56 },
            { text: "Если ты унесёшься ветром, ветром ", time: 60 },
            { text: "Сохрани с собою мой огонь, заглуши мою боль", time: 72 },
            { text: "И моё сердце выбери, солнце выгорит", time: 83 },
            { text: "Мысли выбыли, где бы мы были?", time: 87 },
            { text: "И любовь, и любовь", time: 90 },
            { text: "Ты моё сердце выбери, солнце выгорит", time: 95 },
            { text: "Мысли выбыли, где бы мы были?", time: 99 },
            { text: "И любовь, и любовь, где же ты, моя любовь?", time: 102 },
            { text: "🎵", time: 110 },
            { text: "Твои уста всё шепчут не для меня ", time: 133 },
            { text: "Не для меня", time: 140 },
            { text: "Рукой о стол, ведь это не для меня", time: 145 },
            { text: "Не для меня", time: 152 },
            { text: "Если ты унесёшься ветром, ветром ", time: 156 },
            { text: "Сохрани с собою мой огонь, заглуши мою боль", time: 168 },
            { text: "И моё сердце выбери, солнце выгорит", time: 179 },
            { text: "Мысли выбыли, где бы мы были?", time: 183 },
            { text: "И любовь, и любовь", time: 186 },
            { text: "Ты моё сердце выбери, солнце выгорит", time: 192 },
            { text: "Мысли выборили, где бы мы были?", time: 195 },
            { text: "И любовь, и любовь, где же ты, моя любовь?", time: 198 },
            { text: "🎵", time: 207},
            { text: "Ты моё сердце выбери, солнце выгорит", time: 251 },
            { text: "Мысли выбыли, где бы мы были?", time: 255 },
            { text: "И любовь, и любовь", time: 258 },
            { text: "Ты моё сердце выбери, солнце выгорит", time: 263 },
            { text: "Мысли выбыли, где бы мы были?", time: 267 },
            { text: "И любовь, и любовь, где же ты, моя любовь?", time: 270 }
        ],
        translations: [
            { text: "Your eyes shine not for me", time: 37 },
            { text: "Not for me", time: 44 },
            { text: "To leave everything, but it's not for me", time: 49 },
            { text: "Not for me", time: 56 },
            { text: "If you fly away with the wind, the wind", time: 60 },
            { text: "Take my fire with you, silence my pain", time: 72 },
            { text: "Choose my heart, the sun will burn out", time: 83 },
            { text: "Thoughts are gone, where would we be?", time: 87 },
            { text: "And love, and love", time: 90 },
            { text: "Choose my heart, the sun will burn out", time: 95 },
            { text: "Thoughts are gone, where would we be?", time: 99 },
            { text: "And love, and love, where are you, my love?", time: 102 },
            { text: "Your lips keep whispering not for me", time: 133 },
            { text: "Not for me", time: 140 },
            { text: "A hand on the table — it’s not for me", time: 145 },
            { text: "Not for me", time: 152 },
            { text: "If you fly away with the wind, the wind", time: 156 },
            { text: "Take my fire with you, silence my pain", time: 168 },
            { text: "Choose my heart, the sun will burn out", time: 179 },
            { text: "Thoughts are gone, where would we be?", time: 183 },
            { text: "And love, and love", time: 186 },
            { text: "Choose my heart, the sun will burn out", time: 192 },
            { text: "Thoughts are gone, where would we be?", time: 195 },
            { text: "And love, and love, where are you, my love?", time: 198 },
            { text: "Choose my heart, the sun will burn out", time: 251 },
            { text: "Thoughts are gone, where would we be?", time: 255 },
            { text: "And love, and love", time: 258 },
            { text: "Choose my heart, the sun will burn out", time: 263 },
            { text: "Thoughts are gone, where would we be?", time: 267 },
            { text: "And love, and love, where are you, my love?", time: 270 }


        ],
        similar: ['4', '2', '14']
    },
    '4': {
        title: 'Thinking about you',
        artist: 'Keepitinside',
        image: 'https://avatars.mds.yandex.net/i?id=e74153a916c8406af9b56341bbee38941e4fba58-4252773-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ixkehu.mp3',
        duration: 165,
        lyrics: [
            { text: "Это только музыка текст не сушествюеть", time: 0 },
        ],
        similar: ['5', '2', '3']
    },
    '5': {
        title: 'Ocean',
        artist: 'Elsa & Emilie',
        image: 'https://avatars.mds.yandex.net/i?id=b1dc664f35c06330156f8621bd3b1771272c94fd-5016797-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/k4oe3k.mp3',
        duration: 239,
        lyrics: [
            { text: "I had a lot of love for the docks, for the ocean", time: 9 },
            { text: "And I had a lot of love for the beach where I believed in something", time: 17 },
            { text: "And I had a car and I went too far, and you took me there", time: 25 },
            { text: "And I had a lot of love for the cops, before they got here", time: 33 },
            { text: "I'm headed home, I told you so", time: 41 },
            { text: "I told you so, so why are we not moving no more?", time: 45 },
            { text: "I'm headed home, let them know", time: 49 },
            { text: "I said, I'm going, I'm going, I'm going", time: 53 },
            { text: "Because I've had so much for so long", time: 56 },
            { text: "I don't know how to get back up", time: 59 },
            { text: "Yes I've had so much for so long", time: 64 },
            { text: "That I don't know, I don't know", time: 67 },
            { text: "No more, no more, no more, no more", time: 71 },
            { text: "I said get back up, get back up baby", time: 75 },
            { text: "No more, no more, no more", time: 80 },
            { text: "I said get back up, get back up baby", time: 83 },
            { text: "♪", time: 89 },
            { text: "I used to want you bad, now I've had what I wanted", time: 96 },
            { text: "With money on my mind, I'm doing time, by the ocean", time: 105 },
            { text: "I still have my car, I go too far, you take me there", time: 112 },
            { text: "And if I give it up, will you pick me up and still take me there?", time: 120 },
            { text: "I'm headed home, I told you so", time: 129 },
            { text: "I told you so, so why are we not moving no more?", time: 132 },
            { text: "I'm headed home, let them know", time: 137 },
            { text: "I said, I'm going, I'm going, I'm going", time: 141 },
            { text: "Because I've had so much for so long", time: 144 },
            { text: "I don't know how to get back up", time: 147 },
            { text: "Yes I've had so much for so long", time: 152 },
            { text: "That I don't know, I don't know", time: 156 },
            { text: "No more, no more, no more, no more", time: 159 },
            { text: "I said get back up, get back up baby", time: 163 },
            { text: "No more, no more, no more", time: 168 },
            { text: "I said get back up, get back up baby", time: 171 },
            { text: "♪", time: 177 },
            { text: "I used to want you bad, look where I'm at", time: 184 },
            { text: "I used to want you bad", time: 188 },
            { text: "I used to want you bad, look where I'm at", time: 192 },
            { text: "I used to want you bad", time: 196 },
            { text: "(We're going fast now)", time: 199 },
            { text: "I used to want you bad, look where I'm at", time: 200 },
            { text: "(We're going fast)", time: 203 },
            { text: "I used to want you bad", time: 204 },
            { text: "(We're going fast now)", time: 207 },
            { text: "I used to want you bad, look where I'm at", time: 208 },
            { text: "(Can you hear the silence?)", time: 212 },
            { text: "I used to want you bad", time: 215 },
            { text: "(We're going fast now)", time: 217 },
            { text: "I used to want you bad, look where I'm at", time: 220 },
            { text: "(Can you hear the silence?)", time: 223 },
            { text: "I used to want you bad", time: 220 },
            { text: "(We're going fast now)", time: 223 },
            { text: "I used to want you bad, look where I'm at", time: 224 },
            { text: "(Can you hear the silence?)", time: 227 },
            { text: "I used to want you bad", time: 228 }
        ],
        translations: [
            { text: "Я очень любила доки, любила океан", time: 9 },
            { text: "Я очень любила пляж, там я во что-то верила", time: 17 },
            { text: "У меня была машина, я зашла слишком далеко, и ты привёл меня туда", time: 25 },
            { text: "Я уважала копов, пока они не появились", time: 33 },
            { text: "Я возвращаюсь домой, я же говорила", time: 41 },
            { text: "Я же говорила, так почему мы больше не движемся?", time: 45 },
            { text: "Я возвращаюсь домой, пусть узнают", time: 49 },
            { text: "Я сказала, что ухожу, ухожу, ухожу", time: 53 },
            { text: "Потому что у меня было так много так долго", time: 56 },
            { text: "Я не знаю, как подняться снова", time: 59 },
            { text: "Да, у меня было так много так долго", time: 64 },
            { text: "Что я не знаю, не знаю", time: 67 },
            { text: "Больше не могу, больше не могу", time: 71 },
            { text: "Я сказала — поднимайся, поднимайся, детка", time: 75 },
            { text: "Больше не могу, больше не могу", time: 80 },
            { text: "Я сказала — поднимайся, поднимайся, детка", time: 83 },
            { text: "♪", time: 89 },
            { text: "Я раньше сильно хотела тебя, теперь получила, что хотела", time: 96 },
            { text: "С деньгами в голове, я провожу время у океана", time: 105 },
            { text: "У меня всё ещё есть машина, я захожу слишком далеко, ты ведёшь меня", time: 112 },
            { text: "Если я всё отдам, подберёшь ли ты меня и снова приведёшь туда?", time: 120 },
            { text: "Я возвращаюсь домой, я же говорила", time: 129 },
            { text: "Я же говорила, так почему мы больше не движемся?", time: 132 },
            { text: "Я возвращаюсь домой, пусть узнают", time: 137 },
            { text: "Я сказала, что ухожу, ухожу, ухожу", time: 141 },
            { text: "Потому что у меня было так много так долго", time: 144 },
            { text: "Я не знаю, как подняться снова", time: 147 },
            { text: "Да, у меня было так много так долго", time: 152 },
            { text: "Что я не знаю, не знаю", time: 156 },
            { text: "Больше не могу, больше не могу", time: 159 },
            { text: "Я сказала — поднимайся, поднимайся, детка", time: 163 },
            { text: "Больше не могу, больше не могу", time: 168 },
            { text: "Я сказала — поднимайся, поднимайся, детка", time: 171 },
            { text: "♪", time: 177 },
            { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 184 },
            { text: "Раньше я очень хотела тебя", time: 188 },
            { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 192 },
            { text: "Раньше я очень хотела тебя", time: 196 },
            { text: "(Мы мчимся быстро)", time: 199 },
            { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 200 },
            { text: "(Мы мчимся быстро)", time: 203 },
            { text: "Раньше я очень хотела тебя", time: 204 },
            { text: "(Мы мчимся быстро)", time: 207 },
            { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 208 },
            { text: "(Ты слышишь тишину?)", time: 212 },
            { text: "Раньше я очень хотела тебя", time: 215 },
            { text: "(Мы мчимся быстро)", time: 217 },
            { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 220 },
            { text: "(Ты слышишь тишину?)", time: 223 },
            { text: "Раньше я очень хотела тебя", time: 224 },
            { text: "(Ты слышишь тишину?)", time: 227 },
            { text: "Раньше я очень хотела тебя", time: 228 }
        ],
        similar: ['6', '3', '9', '2']
    },
    '6': {
        title: 'Him & I',
        artist: 'G-Eazy & Halsey',
        image: 'https://avatars.mds.yandex.net/i?id=bdc49464e2a20cf900f4f790daf8cdf9c21c3cef-5175116-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/m3mujb.mp3',
        duration: 269,
        lyrics: [
        { text: "I had a lot of love for the docks, for the ocean", time: 9 },
    { text: "And I had a lot of love for the beach where I believed in something", time: 17 },
    { text: "And I had a car and I went too far, and you took me there", time: 25 },
    { text: "And I had a lot of love for the cops, before they got here", time: 33 },
    { text: "I'm headed home, I told you so", time: 41 },
    { text: "I told you so, so why are we not moving no more?", time: 45 },
    { text: "I'm headed home, let them know", time: 49 },
    { text: "I said, I'm going, I'm going, I'm going", time: 53 },
    { text: "Because I've had so much for so long", time: 56 },
    { text: "I don't know how to get back up", time: 59 },
    { text: "Yes I've had so much for so long", time: 64 },
    { text: "That I don't know, I don't know", time: 67 },
    { text: "No more, no more, no more, no more", time: 71 },
    { text: "I said get back up, get back up baby", time: 75 },
    { text: "No more, no more, no more", time: 80 },
    { text: "I said get back up, get back up baby", time: 83 },
    { text: "♪", time: 89 },
    { text: "I used to want you bad, now I've had what I wanted", time: 96 },
    { text: "With money on my mind, I'm doing time, by the ocean", time: 105 },
    { text: "I still have my car, I go too far, you take me there", time: 112 },
    { text: "And if I give it up, will you pick me up and still take me there?", time: 120 },
    { text: "I'm headed home, I told you so", time: 129 },
    { text: "I told you so, so why are we not moving no more?", time: 132 },
    { text: "I'm headed home, let them know", time: 137 },
    { text: "I said, I'm going, I'm going, I'm going", time: 141 },
    { text: "Because I've had so much for so long", time: 144 },
    { text: "I don't know how to get back up", time: 147 },
    { text: "Yes I've had so much for so long", time: 152 },
    { text: "That I don't know, I don't know", time: 156 },
    { text: "No more, no more, no more, no more", time: 159 },
    { text: "I said get back up, get back up baby", time: 163 },
    { text: "No more, no more, no more", time: 168 },
    { text: "I said get back up, get back up baby", time: 171 },
    { text: "♪", time: 177 },
    { text: "I used to want you bad, look where I'm at", time: 184 },
    { text: "I used to want you bad", time: 188 },
    { text: "I used to want you bad, look where I'm at", time: 192 },
    { text: "I used to want you bad", time: 196 },
    { text: "(We're going fast now)", time: 199 },
    { text: "I used to want you bad, look where I'm at", time: 200 },
    { text: "(We're going fast)", time: 203 },
    { text: "I used to want you bad", time: 204 },
    { text: "(We're going fast now)", time: 207 },
    { text: "I used to want you bad, look where I'm at", time: 208 },
    { text: "(Can you hear the silence?)", time: 212 },
    { text: "I used to want you bad", time: 215 },
    { text: "(We're going fast now)", time: 217 },
    { text: "I used to want you bad, look where I'm at", time: 220 },
    { text: "(Can you hear the silence?)", time: 223 },
    { text: "I used to want you bad", time: 224 },
    { text: "(We're going fast now)", time: 227 },
    { text: "I used to want you bad, look where I'm at", time: 228 },
    { text: "(Can you hear the silence?)", time: 227 },
    { text: "I used to want you bad", time: 228 }
        ],
        translations: [
        { text: "Я очень любила доки, любила океан", time: 9 },
    { text: "Я очень любила пляж, там я во что-то верила", time: 17 },
    { text: "У меня была машина, я зашла слишком далеко, и ты привёл меня туда", time: 25 },
    { text: "Я уважала копов, пока они не появились", time: 33 },
    { text: "Я возвращаюсь домой, я же говорила", time: 41 },
    { text: "Я же говорила, так почему мы больше не движемся?", time: 45 },
    { text: "Я возвращаюсь домой, пусть узнают", time: 49 },
    { text: "Я сказала, что ухожу, ухожу, ухожу", time: 53 },
    { text: "Потому что у меня было так много так долго", time: 56 },
    { text: "Я не знаю, как подняться снова", time: 59 },
    { text: "Да, у меня было так много так долго", time: 64 },
    { text: "Что я не знаю, не знаю", time: 67 },
    { text: "Больше не могу, больше не могу", time: 71 },
    { text: "Я сказала — поднимайся, поднимайся, детка", time: 75 },
    { text: "Больше не могу, больше не могу", time: 80 },
    { text: "Я сказала — поднимайся, поднимайся, детка", time: 83 },
    { text: "♪", time: 89 },
    { text: "Я раньше сильно хотела тебя, теперь получила, что хотела", time: 96 },
    { text: "С деньгами в голове, я провожу время у океана", time: 105 },
    { text: "У меня всё ещё есть машина, я захожу слишком далеко, ты ведёшь меня", time: 112 },
    { text: "Если я всё отдам, подберёшь ли ты меня и снова приведёшь туда?", time: 120 },
    { text: "Я возвращаюсь домой, я же говорила", time: 129 },
    { text: "Я же говорила, так почему мы больше не движемся?", time: 132 },
    { text: "Я возвращаюсь домой, пусть узнают", time: 137 },
    { text: "Я сказала, что ухожу, ухожу, ухожу", time: 141 },
    { text: "Потому что у меня было так много так долго", time: 144 },
    { text: "Я не знаю, как подняться снова", time: 147 },
    { text: "Да, у меня было так много так долго", time: 152 },
    { text: "Что я не знаю, не знаю", time: 156 },
    { text: "Больше не могу, больше не могу", time: 159 },
    { text: "Я сказала — поднимайся, поднимайся, детка", time: 163 },
    { text: "Больше не могу, больше не могу", time: 168 },
    { text: "Я сказала — поднимайся, поднимайся, детка", time: 171 },
    { text: "♪", time: 177 },
    { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 184 },
    { text: "Раньше я очень хотела тебя", time: 188 },
    { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 192 },
    { text: "Раньше я очень хотела тебя", time: 196 },
    { text: "(Мы мчимся быстро)", time: 199 },
    { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 200 },
    { text: "(Мы мчимся быстро)", time: 203 },
    { text: "Раньше я очень хотела тебя", time: 204 },
    { text: "(Мы мчимся быстро)", time: 207 },
    { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 208 },
    { text: "(Ты слышишь тишину?)", time: 212 },
    { text: "Раньше я очень хотела тебя", time: 215 },
    { text: "(Мы мчимся быстро)", time: 217 },
    { text: "Раньше я очень хотела тебя, посмотри, где я теперь", time: 220 },
    { text: "(Ты слышишь тишину?)", time: 223 },
    { text: "Раньше я очень хотела тебя", time: 224 },
    { text: "(Ты слышишь тишину?)", time: 227 },
    { text: "Раньше я очень хотела тебя", time: 228 }
        ],
        similar: ['7', '37', '8', '12']
    },
    '7': {
        title: 'Письмо',
        artist: 'Xcho',
        image: 'https://avatars.mds.yandex.net/i?id=391fff669a891c4b354146a6baa1993b05fcdbb1-5428168-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/e5q453.mp3',
        duration: 144,
        lyrics: [
            { text: "Я спою тебе мой мир в одном дыханьи", time: 17 },
            { text: "Напишу письмо, пусть тонет в океане", time: 20 },
            { text: "Парусом несёт, но я узнал заранее", time: 24 },
            { text: "В нём слова любви, но только на прощанье", time: 28 },
            { text: "Там солнце видело нас двоих", time: 33 },
            { text: "Эти рассветы лишь твои", time: 35 },
            { text: "Ради тебя, родная, наготове", time: 37 },
            { text: "Не теряться, за-заново попытаться", time: 39 },
            { text: "И лишь твоей любовью", time: 43 },
            { text: "Мне нужно оклематься, детка", time: 45 },
            { text: "Я не понимаю, как мне жить (как мне жить)", time: 47 },
            { text: "Ты люби меня, но не спеши (не спеши)", time: 50},
            { text: "И, не вспоминая, грустью добитый", time: 51 },
            { text: "Я собираю тебе ландыши", time: 53 },
            { text: "Милая, дай мне повод", time: 55 },
            { text: "Ведь знаешь, как упорот", time: 58 },
            { text: "Я точно не Пикассо", time: 60 },
            { text: "Но нарисую город", time: 62 },
            { text: "Где нет тебя, нет любви, нет никого, кроме", time: 63 },
            { text: "Ненастья в моём доме (доме), мы поменялись в тоне", time: 68 },
            { text: "Как меняет ложь, меняет бред, меняет невзирая", time: 72 },
            { text: "Я как простой поэт пишу об этом, не скрывая", time: 77},
            { text: "Я спою тебе мой мир в одном дыханьи", time: 80},
            { text: "Напишу письмо, пусть тонет в океане", time: 84},
            { text: "Парусом несёт, но я узнал заранее", time: 88},
            { text: "(Yeah-yeah)", time: 92 },
            { text: "Я спою тебе мой мир в одном дыханьи (yeah)", time: 96 },
            { text: "Напишу письмо, пусть тонет в океане (пусть тонет в океане)", time: 100 },
            { text: "Парусом несёт, но я узнал заранее", time: 104},
            { text: "В нём слова любви, но только на прощанье", time: 108},
            { text: "♪", time: 113},
            { text: "Но только на прощанье", time: 118},
            { text: "♪", time: 121 },
            { text: "Но только на прощанье", time: 126},
        ],
        similar: ['8', '5', '13', '21']
    },
    '8': {
        title: 'Душа моей души',
        artist: 'Adam',
        image: 'https://avatars.mds.yandex.net/i?id=6687dcc0c2a990f5b4f029f8d70af963f0952665-12615842-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/btjmk5.mp3',
        duration: '195',
        lyrics: [
            { text: "My baby, oh my baby", time: 3 },
            { text: "My baby, oh my baby", time: 16 },
            { text: "Ведь ты же знаешь, я тебя никому не отдам", time: 23 },
            { text: "Я твою любовь никогда не предам", time: 28 },
            { text: "My baby, oh my baby", time: 32 },
            { text: "Ведь ты же знаешь, я тебя никому не отдам", time: 39 },
            { text: "Я твою любовь никогда не предам", time: 44 },
            { text: "И мне до тебя, где бы ты не была", time: 49 },
            { text: "Дотронуться сердцем не трудно", time: 51 },
            { text: "И мне без тебя, где бы ты не была", time: 52 },
            { text: "До боли в душе неуютно", time: 54 },
            { text: "Твои сладкие уста – лишают меня сна", time: 56 },
            { text: "Твоя сонная улыбка не  видеть - это пытка", time: 61 },
            { text: "Ты - солнце мое в пути, не жалей свои лучи", time: 64 },
            { text: "Луна моя, в ночи, ты мой путь мне освети", time: 68 },
            { text: "Мое сердце береги, мои раны излечи", time: 73 },
            { text: "Душа моей души", time: 76 },
            { text: "My baby, oh my baby", time: 80 },
            { text: "Ведь ты же знаешь, я тебя никому не отдам", time: 88 },
            { text: "Я твою любовь никогда не предам", time: 93 },
            { text: "My baby, oh my baby", time: 97 },
            { text: "Ведь ты же знаешь, я тебя никому не отдам", time: 104 },
            { text: "Я твою любовь никогда не предам", time: 109 },
            { text: "Ведь ты мой сон наяву, я тебя сохраню", time: 113 },
            { text: "Ты мой сон наяву, я тебя сберегу", time: 117 },
            { text: "Я тебя никому, я тебя никому", time: 121 },
            { text: "Ты – солнце мое в пути, не жалей свои лучи", time: 129 },
            { text: "Луна моя, в ночи, ты мой путь мне освети", time: 134 },
            { text: "Мое сердце береги, мои раны излечи", time: 137 },
            { text: "Душа моей души", time: 141 },
            { text: "My baby, oh my baby", time: 146 },
            { text: "Ведь ты же знаешь, я тебя никому не отдам", time: 152 },
            { text: "Я твою любовь никогда не предам", time: 158 },
            { text: "My baby, oh my baby", time: 161 },
            { text: "Ведь ты же знаешь, я тебя никому не отдам", time: 169 },
            { text: "Я твою любовь никогда не предам", time: 174  },
            
        ],
        similar: ['9', '18', '40', '30']
    },
    '9': {
        title: 'Безусловная любовь',
        artist: 'MONA, NAVAI',
        image: 'https://avatars.mds.yandex.net/i?id=b920c30232aff5b4ef9d76dc2201617c46cd937a-8325401-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/wjtbmc.mp3',
        duration: '160',
        lyrics: [
            { text: "Manvel", time: 0 },
            { text: "♪", time: 5 },
            { text: "А мы босыми ногами по крыше, сегодня нас точно никто не услышит", time: 10 },
            { text: "Ты без остатка, и я тебя слишком, два незнакомца, но выбраны свыше", time: 15 },
            { text: "А мы босыми ногами по крыше, сегодня нас точно никто не услышит", time: 0 },
            { text: "Ты без остатка, и я тебя слишком, два незнакомца, но выбраны свыше", time: 0 },
            { text: "Кому-то это было нужно", time: 0 },
            { text: "Свести нас глазами, чтобы в миг обезоружить", time: 0 },
            { text: "Ты в людях видел только лужи, я даже хуже", time: 0 },
            { text: "Я видела в них то, что меня ранит и разрушит", time: 0 },
            { text: "Но не ты, ты для более высокой цели", time: 0 },
            { text: "Ты держишь страхи в моём сердце под своим прицелом", time: 0 },
            { text: "В нашей любви мы как единое, мы стали целым", time: 0 },
            { text: "Мы этим чувствам знаем цену", time: 0 },
            { text: "Ты улыбаешься, я — нет", time: 0 },
            { text: "Многословная любовь", time: 0 },
            { text: "Неслучайная она", time: 0 },
            { text: "Безусловная", time: 0 },
            { text: "А мы босыми ногами по крыше, сегодня нас точно никто не услышит", time: 0 },
            { text: "Ты без остатка, и я тебя слишком, два незнакомца, но выбраны свыше", time: 0 },
            { text: "А мы босыми ногами по крыше, сегодня нас точно никто не услышит", time: 0 },
            { text: "Ты без остатка, и я тебя слишком, два незнакомца, но выбраны свыше", time: 0 },
            { text: "Внутри осень, листопады, ты научилась панцирь свой быстро прятать", time: 0 },
            { text: "А мы обещали, что будем всегда вместе падать, что ж стряслось, душа моя, почему ты не рядом?", time: 0 },
            { text: "Боль из моей души, но твоё разбитое сердце просит тебя: Больше не спеши (не спеши)", time: 0 },
            { text: "Мы снова согрешим, как только разум прикажет сердцу: Немножко подыши", time: 0 },
            { text: "Ты улыбаешься, я — нет", time: 0 },
            { text: "Многословная любовь", time: 0 },
            { text: "Неслучайная она", time: 0 },
            { text: "Безусловная", time: 0 },
            { text: "А мы босыми ногами по крыше, сегодня нас точно никто не услышит", time: 0 },
            { text: "Ты без остатка, и я тебя слишком, два незнакомца, но выбраны свыше", time: 0 },
            { text: "А мы босыми ногами по крыше, сегодня нас точно никто не услышит", time: 0 },
            { text: "Ты без остатка, и я тебя слишком, два незнакомца, но выбраны свыше", time: 0 },
        ],
        similar: ['10', '37', '23', '45']
    },
    '10': {
        title: 'Когда исчезнет Слово ',
        artist: 'MOT',
        image: 'https://avatars.mds.yandex.net/i?id=b1cf179b59221c34b9634162c57082aea4c7e710-13008278-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/bs7zjn.mp3',
        duration: '176',
        lyrics: [
            { text: "Я разлюблю тебя, когда исчезнет слово", time: 24 },
            { text: "Я разлюблю тебя, когда исчезнут города", time: 26 },
            { text: "И не сойдёт огонь во храме Иегова", time: 29 },
            { text: "Я разлюблю тебя, походу, уже никогда", time: 31 },
            { text: "Я разлюблю тебя, когда исчезнет слово", time: 35 },
            { text: "Я разлюблю тебя, когда исчезнут города", time: 37},
            { text: "И не сойдёт огонь во храме Иегова", time: 40 },
            { text: "Я разлюблю тебя, походу, уже никогда", time: 44 },
            { text: "Хм, в смысле, когда это закончится? (В смысле?)", time: 47 },
            { text: "Никогда!", time: 49 },
            { text: "Мы ведь на веки вечные", time: 50 },
            { text: "Аминь", time: 52 },
            { text: "Спустя сто лет, сто миль", time: 53 },
            { text: "Вдвоём стабильно", time: 54 },
            { text: "Хм, вот это стиль", time: 55 },
            { text: "Когда сто параллельных (сто параллельных) пересекутся (пересекутся)", time: 57},
            { text: "Знаю, даже тогда никогда-никогда", time: 63 },
            { text: "Нашей судьбы канаты не порвутся", time: 66 },
            { text: "Я разлюблю тебя, когда исчезнет слово", time: 69 },
            { text: "Я разлюблю тебя, когда исчезнут города", time: 72 },
            { text: "И не сойдёт огонь во храме Иегова", time: 75 },
            { text: "Я разлюблю тебя, походу, уже никогда", time: 77 },
            { text: "Я разлюблю тебя, когда исчезнет слово", time: 81},
            { text: "Я разлюблю тебя, когда исчезнут города", time: 83 },
            { text: "И не сойдёт огонь во храме Иегова", time: 86},
            { text: "Я разлюблю тебя, походу, уже никогда", time: 89},
            { text: "Раз в пятый", time: 92 },
            { text: "Система нервная распята", time: 93},
            { text: "Я повторяю тебе: зря ты", time: 96},
            { text: "Зря ты боишься, что нас может разлучить что-то", time: 98},
            { text: "Скорее Тихий океан станет лишь болотом", time: 100},
            { text: "Когда исчезнет грех", time: 103},
            { text: "Когда умрёт коррида", time: 105},
            { text: "Когда вместо пустынь всех будет Атлантида", time: 107},
            { text: "И не удержат нашу Землю больше три кита", time: 108},
            { text: "То есть нескоро, а точнее уже никогда", time: 112},
            { text: "(Я разлюблю тебя)", time: 116},
            { text: "Я разлюблю", time: 118},
            { text: "(Я разлюблю тебя)", time: 120},
            { text: "Да", time: 121},
            { text: "Никогда-никогда", time: 122},
            { text: "(Никогда-никогда)", time: 124},
            { text: "Никогда-никогда", time: 126},
            { text: "Я разлюблю тебя, когда исчезнет слово", time: 127},
            { text: "Я разлюблю тебя, когда исчезнут города", time: 130},
            { text: "И не сойдёт огонь во храме Иегова", time: 132},
            { text: "Я разлюблю тебя, походу, уже никогда", time: 134},
            { text: "Я разлюблю тебя, когда исчезнет слово", time: 137},
            { text: "Я разлюблю тебя, когда исчезнут города", time: 141},
            { text: "И не сойдёт огонь во храме Иегова", time: 142},
            { text: "Я разлюблю тебя, походу, уже никогда", time: 146},

        ],
        similar: ['11', '25', '35']
    },
    '11': {
        title: 'Нужна',
        artist: 'MDee',
        image: 'https://avatars.mds.yandex.net/i?id=7c760dc76e8c320fc6e9444549d8302123169b2f-4885555-images-thumbs&n=13',
        audio:'https://files.catbox.moe/snfw3k.mp3',
        duration: '256',
        lyrics: [
            { text: "Давай мы убежим", time: 31 },
            { text: "Вдвоём на край земли", time: 35 },
            { text: "Никто и никогда", time: 38 },
            { text: "Нас не найдет", time: 42 },
            { text: "Искал тебя в других", time: 45 },
            { text: "Но мне нужна лишь ты", time: 49 },
            { text: "Как солнце и луна", time: 53 },
            { text: "Ты мне нужна", time: 55 },
            { text: "Словно приливы океану", time: 58 },
            { text: "Словно небу облака", time: 61},
            { text: "Словно грешным душам ангел", time: 65},
            { text: "Ты нужна мне", time: 68 },
            { text: "Ты нужна", time: 70 },
            { text: "Как для безумца наказание", time: 72},
            { text: "Как цветку нужна вода", time: 75},
            { text: "Словно смелость для признаний", time: 79},
            { text: "Ты нужна мне", time: 82},
            { text: "Ты нужна", time: 84 },
            { text: "Возьми меня, возьми", time: 88 },
            { text: "К себе на один миг", time: 91},
            { text: "И я продлю его", time: 94 },
            { text: "Хоть навсегда", time: 97},
            { text: "Плевать на остальных", time: 101},
            { text: "Я здесь", time: 105},
            { text: "Пока здесь ты", time: 107},
            { text: "Три слова на губах", time: 109},
            { text: "Ты мне нужна", time: 111},
            { text: "Словно приливы океану", time: 114},
            { text: "Словно небу облака", time: 117},
            { text: "Словно грешным душам ангел", time: 121},
            { text: "Ты нужна мне", time: 124},
            { text: "Ты нужна", time: 126},
            { text: "Как для безумца наказание", time: 128},
            { text: "Как цветку нужна вода", time: 131},
            { text: "Словно смелость для признаний", time: 134},
            { text: "Ты нужна мне", time: 138},
            { text: "Ты нужна", time: 140},
            { text: "Ты нужна для меня как день", time: 143},
            { text: "Ты нужна для меня как ночь", time: 146},
            { text: "Ты нужна для меня как свет", time: 150},
            { text: "Ты нужна как жизнь", time: 153},
            { text: "Ты нужна как воздух", time: 155},
            { text: "Ты нужна для меня как день", time: 158},
            { text: "Ты нужна для меня как ночь", time: 161},
            { text: "Ты нужна для меня как свет", time: 165},
            { text: "Ты нужна как жизнь", time: 167},
            { text: "Ты нужна как воздух", time: 168},
            { text: "Словно приливы океану", time: 170},
            { text: "Словно небу облака", time: 173},
            { text: "Словно грешным душам ангел", time: 177},
            { text: "Ты нужна мне", time: 180},
            { text: "Ты нужна", time: 182},
            { text: "Как для безумца наказание", time: 184},
            { text: "Как цветку нужна вода", time: 187},
            { text: "Словно смелость для признаний", time: 191},
            { text: "Ты нужна мне", time: 195},
        ],
        similar: ['12', '13', '14', '15']
    },
    '12': {
        title: 'Помню',
        artist: 'ergabvs',
        image: 'https://avatars.mds.yandex.net/i?id=ab22ffe40fd88e00b259a161c23cc4a7db347f1c-5310207-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/pnhx6z.mp3',
        duration: '150',
        lyrics: [
        { text: "Не мог найти текст", time: 0 },
        ],
        similar: ['13', '31', '26', '41']     
    },
    '13': {
        title: 'Апаке',
        artist: 'ergabvs',
        image: 'https://avatars.mds.yandex.net/i?id=1b556837f878744f4c5cb5e26d3c8a164272e9fc-5889107-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/nztxw3.mp3',
        duration: '117',
        lyrics: [
        { text: "Бир бул дуйнодо", time: 13 },
            { text: "Бир адамга мен суктанам", time: 14 },
            { text: "Кечинде кеч келсемда", time: 16 },
            { text: "Мени кутот менин апам", time: 17 },
            { text: "Ушунча кыйналсада", time: 19 },
            { text: "Эчкимге ал коргозбойт", time: 20 },
            { text: "Коз жашын бекитип алып", time: 22 },
            { text: "Сурайт кандай балам?", time: 24 },
            { text: "Мен журом темселеп", time: 25 },
            { text: "Апам мени ойлойт", time: 27 },
            { text: "Жаман нерсени кылба балам", time: 28 },
            { text: "Озунду ойло", time: 30 },
            { text: "Мен басып тепселеп", time: 32 },
            { text: "Качам мен эщике", time: 33 },
            { text: "Апам мени кутот", time: 35 },
            { text: "Тамак менен саат тункуго", time: 36 },
            { text: "Кайра кайра башталат", time: 38 },
            { text: "Апам айткан иш ташталат", time: 39 },
            { text: "Мен чуркайм эщике", time: 41 },
            { text: "Ойлорум башка жерде", time: 42 },
            { text: "Кайра кайра башталат", time: 44 },
            { text: "Апам айткан иш ташталат", time: 46 },
            { text: "Мен чуркайм эщике", time: 47 },
            { text: "Ойлорум башка жерде", time: 49 },
            { text: "Мамочка мамуля", time: 51 },
            { text: "Прости же ты сынулю", time: 52 },
            { text: "За то что он приходит поздно", time: 54 },
            { text: "За то что курит", time: 57 },
            { text: "Но мам ты не переживай всё нормально будет", time: 57 },
            { text: "Не спаду с дороги", time: 61 },
            { text: "Обо всем плохом забуду", time: 62 },
            { text: "Мам я знаю", time: 64 },
            { text: "Ты многое на душе скрываешь", time: 65 },
            { text: "Твоя улыбка на лице", time: 67 },
            { text: "Лишь твою боль она скрывает", time: 68 },
            { text: "Ты лишь улыбнёшься и мир будто зацветает", time: 70 },
            { text: "Ты ценность всей моей жизни мама", time: 73 },
            { text: "Люблю скучаю", time: 75 },
            { text: "Бир бул дуйнодо", time: 89 },
            { text: "Бир адамга мен суктанам", time: 90 },
            { text: "Кечинде кеч келсемда", time: 92 },
            { text: "Мени кутот менин апам", time: 94 },
            { text: "Ушунча кыйналсада", time: 96 },
            { text: "Эчкимге ал коргозбойт", time: 97 },
            { text: "Коз жашын бекитип алып", time: 99 },
            { text: "Сурайт кандай балам?", time: 102 },
            { text: "Мен журом темселеп", time: 103 },
            { text: "Апам мени ойлойт", time: 104 },
            { text: "Жаман нерсени кылба балам", time: 105 },
            { text: "Озунду ойло", time: 107 },
            { text: "Мен басып тепселеп", time: 108 },
            { text: "Качам мен эщике", time: 110 },
            { text: "Апам мени кутот", time: 112 },
            { text: "Тамак менен саат тункуго", time: 113 },
        ],
        similar: ['14', '24', '41', '31']     
    },
    '14': {
        title: 'В Метре',
        artist: 'ergabvs',
        image: 'https://avatars.mds.yandex.net/i?id=c78686e9c8774955faf2b927baafa0cb1c12dff5-5352007-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/wzmwqb.mp3',
        duration: '129',
        lyrics: [
        { text: "Я вот заметил одно,", time: 11 },
            { text: "Что мне с тобой хорошо", time: 13 },
            { text: "Но детка не бросай меня", time: 14}, 
            { text: " Если найдешь другого", time: 16 },
            { text: "Ведь я готов любить в старонке ", time: 17 },
            { text: "Совсем в темного и даже мне будет", time: 19},
            { text: "От этого даже спокойно", time: 21},
            { text: "Знаешь я греть тебя совсем не перестану", time: 23},
            { text: "От твоих приколов я улыбаюсь и я не устану", time: 26},
            { text: "Ты главное будь рядом , будь ко мне ты ближе", time: 28},
            { text: "Ведь я всегда с тобою жанам, моя любовь ты с выши", time: 31},
            { text: "Я каждый день листаю твои фотки на мобиле", time: 35},
            { text: "Я так сильно хочу обнять тебя прижать насильно", time: 37},
            { text: "Хочу быть для тебя тем самым, хочу быть любимым", time: 41},
            { text: "Но ты меня не ценишь, ценишь своих дебилов", time: 43},
            { text: "Я каждый день приезжаю стою у дома", time: 47},
            { text: "Пока стоял в мыслях прописал себе я томы", time: 49},
            { text: "О чем будем болтать и что мне впредь сказать", time: 52},
            { text: "Но все что я скажу я повторю опять", time: 55},
            { text: "Коздорунду карап туруп мен баарын унутамын", time: 58},
            { text: "Алыста мен журсом ойлорунду мен жутамын", time: 61},
            { text: "Жарыкты сен сактап журогумо бердин баарын", time: 64},
            { text: "Ойлогон сени дары, сага жетпейт бул баары", time: 67},
            { text: "Коздорунду карап туруп мен баарын унутамын", time: 70},
            { text: "Алыста мен журсом ойлорунду мен жутамын", time: 72},
            { text: "Жарыкты сен сактап журогумо бердин баарын", time: 75},
            { text: "Ойлогон сени дары, сага жетпейт бул баары", time: 78},
            { text: "А ты вспомни что было пару лет назад", time: 82},
            { text: "Гонялся за тобою залипал в твои глаза", time: 84},
            { text: "И мир изменился но для меня ты та", time: 87},
            { text: "В глубинке моей души и где то в моих снах", time: 90},
            { text: "А я хожу брожу по паркам я гуляю", time: 93},
            { text: "Шагая в пустоту тебя я вспоминаю", time: 96},
            { text: "Тут счастливые люди без заботные", time: 97},
            { text: "Они меня не знают и я их тоже", time: 102},
            { text: "Правда я скучаю по тебе родная", time: 105},
            { text: "Если говорить открыто ты же это знаешь", time: 108},
            { text: "Знаешь молчишь и на звонки не отвечаешь", time: 111},
            { text: "Где твои слова не брошу жан я обещаю", time: 113},
        ],
        similar: ['15', '13', '24', '13']     
    },
    '15': {
        title: 'Глазки',
        artist: 'ergabvs',
        image: 'https://avatars.mds.yandex.net/i?id=36364a1d68bfd85fdc38594973f5c932cca0bf2e-5502450-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ee3krn.mp3',
        duration: '120',
        lyrics: [
        { text: "Я снова ищу твои глазки", time: 16 },
            { text: "Я будто потерялся в сказке", time: 18 },
            { text: "Мне так не хватает твоей нежной ласки", time: 20 },
            { text: "Я снова пою под - Shiloh Dynasty", time: 22 },
            { text: "Я снова ищу твои глазки", time: 24 },
            { text: "Я будто потерялся в сказке", time: 26 },
            { text: "Мне так не хватает твоей нежной ласки", time: 28 },
            { text: "Я снова пою под - Shiloh Dynasty", time: 31 },
            { text: "Знаешь меня может согреть - твоя улыбка", time: 33 },
            { text: "Я днями ночами", time:  35 },
            { text: "Пытаюсь привыкнуть", time: 36},
            { text: "Так тяжело забыть, твою улыбку", time: 37},
            { text: "Я днями, ночами пытаюсь привыкнуть", time: 39},
            { text: "Нас разделяют мосты (мосты)", time: 41},
            { text: "Дни летят, наши чувства остыли", time: 43},
            { text: "Я снова в холодном простыл", time: 46},
            { text: "Мне наплевать на это", time: 47},
            { text: "Ведь наши души просты", time: 49},
            { text: "♪", time: 51},
            { text: "Я снова ищу твои глазки", time: 58},
            { text: "Я будто потерялся в сказке", time: 60},
            { text: "Мне так не хватает твоей нежной ласки", time: 62},
            { text: "Я снова пою", time: 64},
            { text: "А помнишь тот день", time: 66},
            { text: "В котором явился к тебе", time: 67},
            { text: "Ночью морозы, я снова на дне", time: 69},
            { text: "Где был труслив чтобы", time: 71},
            { text: "Просто быть ближе к тебе", time: 72},
            { text: "Теперь все иначе", time: 73},
            { text: "Жан я люблю тебя, твои глаза!", time: 74},
            { text: "Люблю все что окружает тебя", time: 76},
            { text: "На все готов чтобы счастливить - тебя!", time: 79},
            { text: "Лишь бы мне видеть - только тебя", time: 81},
            { text: "Я снова ищу твои глазки", time: 82},
            { text: "Я будто потерялся в сказке", time: 85},
            { text: "Мне так не хватает твоей нежной ласки", time: 87 },
            { text: "Я снова пою под - Shiloh Dynasty", time: 90},
            { text: "Я снова ищу твои глазки", time: 92},
            { text: "Я будто потерялся в сказке", time: 94},
            { text: "Мне так не хватает твоей нежной ласки", time: 96},
            { text: "Я снова пою под - Shiloh Dynasty", time: 98},
        ],
        similar: ['16', '43', '14', '35']     
    },
    '16': {
        title: 'Watch',
        artist: 'Billie Eillish',
        image: 'https://avatars.mds.yandex.net/i?id=912a03f2b0bebbb3d28f4549c912e2eeed10f603-5250695-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/5f16m0.mp3',
        duration: '177',
        lyrics: [
        { text: "Lips meet teeth and tongue", time: 0 },
            { text: "My heart skips eight beats at once", time: 5 },
            { text: "If we were meant to be, we would have been by now", time: 12 },
            { text: "See what you wanna see, but all I see is him right now", time: 18 },
            { text: "I'll sit and watch your car burn", time: 25 },
            { text: "With the fire that you started in me", time: 30 },
            { text: "But you never came back to ask it out", time: 33 },
            { text: "Go ahead and watch my heart burn", time: 36 },
            { text: "With the fire that you started in me", time: 40 },
            { text: "But I'll never let you back to put it out", time: 43 },
            { text: "Your love feels so fake", time: 50 },
            { text: "And my demands aren't high to make", time: 55 },
            { text: "If I could get to sleep, I woulda slept by now", time: 61 },
            { text: "Your lies will never keep, I think you need to blow 'em out", time: 67 },
            { text: "I'll sit and watch your car burn", time: 75 },
            { text: "With the fire that you started in me", time: 79 },
            { text: "But you never came back to ask it out", time: 82 },
            { text: "Go ahead and watch my heart burn", time: 85 },
            { text: "With the fire that you started in me", time: 89 },
            { text: "But I'll never let you back to put it out", time: 92 },
            { text: "♪", time: 97 },
            { text: "When you call my name", time: 108 },
            { text: "Do you think I'll come runnin'?", time: 110 },
            { text: "You never did the same", time: 112 },
            { text: "So good at giving me nothin'", time: 115 },
            { text: "When you close your eyes, do you picture me?", time: 118 },
            { text: "When you fantasize, am I your fantasy?", time: 121 },
            { text: "Now you know, now I'm free", time: 125 },
            { text: "I'll sit and watch your car burn", time: 130 },
            { text: "With the fire that you started in me", time: 134 },
            { text: "But you never came back to ask it out", time: 137 },
            { text: "Watch my heart burn", time: 141 },
            { text: "With the fire that you started in me", time: 145 },
            { text: "But I'll never let you back to put it out", time: 148 },
            { text: "Ooh, never let you back", time: 154 },
            { text: "Let you back, let you back", time: 162 },
            { text: "Never gonna let you back, let you back", time: 166 }, 
        ],
        similar: ['17', '34', '25', '23']     
    },
    '17': {
        title: 'IVL',
        artist: 'MACAN,SCIRENA',
        image: 'https://avatars.mds.yandex.net/i?id=2961ee1d4d13a5079e2a167b22519b8c563152ae-12601053-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/i0m7rp.mp3',
        duration: '200',
        lyrics: [
        { text: "Мы рядом с тобою шли, ты шёл мне, я тебе шла", time: 17 },
            { text: "Это ты нашёл, я нашла, о-о", time: 22 },
            { text: "Но временем не зашить сердце, что из стекла", time: 26 },
            { text: "Любовь, что истекла (yeah-yeah)", time: 31 },
            { text: "Это ли любовь — я не знаю точно (whoa)", time: 34 },
            { text: "Мы с тобой по прямой, но это обочина (yeah)", time: 36 },
            { text: "Ты теперь надолго с моим почерком", time: 38 },
            { text: "Я теперь надолго уйду в творчество", time: 40 },
            { text: "Закурю сигарету от голода", time: 42 },
            { text: "Я закурю сигарету на холоде, но (yeah)", time: 44} ,
            { text: "Завтра нас не будет в городе, oh", time: 47 },
            { text: "Завтра нас не будет (yeah, yeah, yeah)", time: 49 },
            { text: "Скажи, почему ты растеряна, а?", time: 51 },
            { text: "В гелике грустное стерео, воу", time: 53},
            { text: "Всё, что нас лечит, всё временно, ведь", time: 55 },
            { text: "У нас болит не материя, и нервы гонят нам кровь по артерии", time: 57 },
            { text: "Тушь на щеках — это подтёки (yeah, oh)", time: 61},
            { text: "Тушу 160 в плотном потоке", time: 63},
            { text: "Подари мне ещё час этой тревоги (oh)", time: 65},
            { text: "И бежим друг от друга, несмотря под ноги (yeah)", time: 67},
            { text: "Мы рядом с тобою шли, ты шёл мне, я тебе шла", time: 71},
            { text: "Это ты нашёл, я нашла (я нашла, yeah)", time: 77},
            { text: "Но временем не зашить сердце, что из стекла", time: 80},
            { text: "Любовь, что истекла", time: 86},
            { text: "Знаешь, просто мы рядом с тобою шли, ты шёл мне, я тебе шла", time: 88},
            { text: "Это ты нашёл, я нашла (о-о, yeah)", time: 94},
            { text: "Но временем не зашить сердце, что из стекла", time: 98},
            { text: "Любовь, что истекла (yeah)", time: 103},
            { text: "Вокруг дым сигарет с ветром, yeah (wow)", time: 106},
            { text: "Вокруг дым сигарет с ветром (yeah-yeah)", time: 108},
            { text: "Во-во мне дым сигарет кента", time: 110},
            { text: "Мы гаснем с окнами до рассвета", time: 112},
            { text: "На тебе полумрак, но ты раздета", time: 114},
            { text: "Я буду самым больным твоим секретом", time: 116},
            { text: "Буду для тебя темой, что под запретом", time: 119},
            { text: "Ты была без сердца — теперь смертна", time: 121},
            { text: "Ты была моей песней, но ты спета", time: 123},
            { text: "Сумасшедшая секта, кайф и момент", time: 125},
            { text: "А нам надо было брать обратно билеты", time: 127},
            { text: "Боже, перестань, ну сколько нам лет?", time: 130},
            { text: "Да, я знаю, всё это пройдёт до лета, но", time: 132},
            { text: "Навряд ли ты найдёшь покой где-то, вряд ли", time: 134},
            { text: "Я буду счастлив с кем-то навряд ли", time: 138},
            { text: "Мы найдёмся на этой карте", time: 140},
            { text: "Стоп, снято. Стоп, партия", time: 141},
            { text: "Мы рядом с тобою шли, ты шёл мне, я тебе шла", time: 145},
            { text: "Это ты нашёл, я нашла (о-о, я нашла, yeah)", time: 151},
            { text: "Но временем не зашить сердце, что из стекла", time: 155},
            { text: "Любовь, что истекла", time: 160},
            { text: "Знаешь, просто мы рядом с тобою шли, ты шёл мне, я тебе шла", time: 162},
            { text: "Это ты нашёл, я нашла (о-о, yeah)", time: 168},
            { text: "Но временем не зашить сердце, что из стекла", time: 172},
            { text: "Любовь, что истекла", time: 177},
        ],
        similar: ['18', '21', '19', '17']     
    },
    '18': {
        title: 'L',
        artist: 'MACAN',
        image: 'https://avatars.mds.yandex.net/i?id=411a3c09709c5bc766ba8f1b0a0fc05ab4f541e7-5234556-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/oehzgt.mp3',
        duration: '158',
        lyrics: [
        { text: "Эй, эй, Mac, воу", time: 8 },
            { text: "Прости меня, моё сердце, я не всегда был тебе предан", time: 10 },
            { text: "Часто слушая тех, кем по итогу был предан", time: 13 },
            { text: "Рёбра давят на грудь, будто давят новые кеды", time: 16 },
            { text: "Внутренние дети сидят в клетках взрослой системы", time: 19 },
            { text: "Что переписала смыслы и завернула это в поэмы", time: 21 },
            { text: "И подменила лекарства на яд и пустила их нам по венам", time: 24 },
            { text: "Но мы обязательно встретимся, а когда обнимемся", time: 28 },
            { text: "Вновь поймём, что единственным смыслом была", time: 30 },
            { text: "Была любовь, любовь, любовь, любовь", time: 33 },
            { text: "А я вновь и вновь, и вновь ходил, дурак", time: 35 },
            { text: "Тысячи секунд, минут, часов ища дорогу", time: 38 },
            { text: "Хотя все меня вели и так", time: 41 },
            { text: "Да, была любовь, любовь, любовь, любовь", time: 44 },
            { text: "А я вновь и вновь, и вновь ходил, дурак", time: 47 },
            { text: "Тысячи секунд, минут, часов ища дорогу", time: 50 },
            { text: "Хотя все меня вели и так", time: 53 },
            { text: "Я закурю на лестнице ночью Parliament Aqua", time: 55 },
            { text: "Сегодня был хороший день, верю, так будет завтра", time: 58 },
            { text: "Я закурю, потом останется только её обнять", time: 61 },
            { text: "Я замолю грехи, чтобы мне легче было спать", time: 64 },
            { text: "Я вспомню всех своих родных и обещаю не забывать", time: 67 },
            { text: "Сколько раз ангел меня спас, хотя мог бы и не спасать", time: 69 },
            { text: "Сколько мы пролетели, сколько нам ещё летать", time: 72 },
            { text: "Вспомню, как там дома мама, и сразу начну скучать", time: 75 },
            { text: "Закурю воспоминания, выдыхая едкий дым", time: 77 },
            { text: "О тех, кто выбрал жить на всю, но погибать молодыми, увы", time: 80 },
            { text: "Воспоминания о тех, кто так не вышел сухим из воды", time: 84 },
            { text: "Сказав: Так было нужно, знаешь, мне не до судьбы", time: 87 },
            { text: "Станции жизни пролетают мимо молодых", time: 90 },
            { text: "Свечи в круглые за живых ставлю, упомянув святых", time: 93 },
            { text: "Сегодня был хороший день, я буду ждать таких", time: 96 },
            { text: "Спаси и сохрани меня и моих", time: 98 },
            { text: "Была любовь, любовь, любовь, любовь", time: 101 },
            { text: "А я вновь и вновь, и вновь ходил, дурак", time: 103 },
            { text: "Тысячи секунд, минут, часов ища дорогу", time: 106 },
            { text: "Хотя все меня вели и так", time: 109 },
            { text: "Да, была любовь, любовь, любовь, любовь", time: 112 },
            { text: "А я вновь и вновь, и вновь ходил, дурак", time: 114 },
            { text: "Тысячи секунд, минут, часов ища дорогу", time: 117 },
            { text: "Хотя все меня вели и так", time: 121 },
            { text: "Была любовь, любовь, любовь, любовь", time: 123 },
            { text: "А я вновь и вновь, и вновь ходил, дурак", time: 126 },
            { text: "Тысячи секунд, минут, часов ища дорогу", time: 129 },
            { text: "Хотя все меня вели и так", time: 122 },
            { text: "Да, была любовь, любовь, любовь, любовь", time: 134 },
            { text: "А я вновь и вновь, и вновь ходил, дурак", time: 137 },
            { text: "Тысячи секунд, минут, часов ища дорогу", time: 140 },
            { text: "Хотя все меня вели и так", time: 143 },
        ],
        similar: ['19', '39', '27', '28']     
    },
    '19': {
        title: 'baiqamady',
        artist: 'ния, bir kyz',
        image: 'https://avatars.mds.yandex.net/i?id=d37778a5e1d9a0a431cbdcdc8f6348b5b8db997c-10877992-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/vjc0oe.mp3',
        duration: '166',
        lyrics: [
        { text: " К сожилению я не нашел текст песни ", time: 0 },
        { text: " То есть было лень по искать в гугл", time: 5 },
        ],
        similar: ['20', '41', '36', '27']     
    },
    '20': {
        title: 'Eyes',
        artist: 'V$XVPRINCE, ния',
        image: 'https://avatars.mds.yandex.net/i?id=8cd9934fdcee39c375fe8d658d9b2bc1c10ffd56-10158740-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/0zroh0.mp3',
        duration: '190',
        lyrics: [
            { text: " К сожилению я не нашел текст песни ", time: 0 },
            { text: " То есть было лень по искать в гугл", time: 5 },
        ],
        similar: ['21', '41', '25', '26']     
    },
    '21': {
        title: 'На 2 их',
        artist: 'V$XVPRINCE, Витя АК',
        image: 'https://avatars.mds.yandex.net/i?id=94ce411e078c32c8928ccdc03a55cf21073a1836-5513776-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/zl2yxv.mp3',
        duration: '196',
        lyrics: [
            { text: " К сожилению я не нашел текст песни ", time: 0 },
            { text: " То есть было лень по искать в гугл", time: 5 },
        ],
        similar: ['22', '7', '34', '27']     
    },
    '22': {
        title: 'Цветы',
        artist: 'V$XVPRINCE',
        image: 'https://avatars.mds.yandex.net/i?id=05e15f4c1d0a0ae71f784c8f2b12c5ac4ab9b9b5-5234303-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/qkky70.mp3',
        duration: '244',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['23', '26', '37', '16']     
    },
    '23': {
        title: 'Раздевайся',
        artist: 'V$XVPRINCE',
        image: 'https://avatars.mds.yandex.net/i?id=d1501583af54a81c691bea651eda2bf2a67fb9fa-4567411-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/6hqm9t.mp3',
        duration: '170',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['24', '6', '10', '14']     
    },
    '24': {
        title: 'Big City Life',
        artist: 'V$XVPRINCE',
        image: 'https://avatars.mds.yandex.net/i?id=02c89bef920c1983169c74c7cf9fdcbe3717e29c-5335451-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ubmpa1.mp3',
        duration: '264',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['25', '1', '17', '20']     
    },
    '25': {
        title: 'Керек Емессин',
        artist: 'V$XVPRINCE',
        image: 'https://avatars.mds.yandex.net/i?id=15906725db43b7a2fca5d3d8b5daccf737156115-5551764-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/23xlj7.mp3',
        duration: '244',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['26', '34', '41', '19']     
    },
    '26': {
        title: 'Tokyo',
        artist: 'V$XVPRINCE',
        image: 'https://avatars.mds.yandex.net/i?id=15906725db43b7a2fca5d3d8b5daccf737156115-5551764-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/wvlmnu.mp3',
        duration: '171',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['27', '24', '38', '16']     
    },
    '27': {
        title: 'Мурашки',
        artist: 'V$XVPRINCE',
        image: 'https://avatars.mds.yandex.net/i?id=15906725db43b7a2fca5d3d8b5daccf737156115-5551764-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/bmbk6j.mp3',
        duration: '174',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['28', '4', '3', '1']     
    },
    '28': {
        title: 'Между нами',
        artist: 'Lizer',
        image: 'https://avatars.mds.yandex.net/i?id=b7dc423aa42c505546af754c72979d9da191abe1-16297497-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/dl8ch4.mp3',
        duration: '256',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['29', '37', '16', '41']     
    },
    '29': {
        title: 'За плохое, за хорошее',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/dmzk7z.mp3',
        duration: '143',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['30', '34', '16', '17']     
    },
    '30': {
        title: 'No Pasaran',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/2cz9xe.mp3',
        duration: '176',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['31', '26', '13', '11']     
    },
    '31': {
        title: 'No Pasaran 2',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/de6vjz.mp3',
        duration: '193',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['32', '11', '14', '37']     
    },
    '32': {
        title: 'Mon Ami',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/s976km.mp3',
        duration: '142',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['33', '17', '15', '17']     
    },
    '33': {
        title: 'Spirit',
        artist: 'Кот Балу, Santiz',
        image: 'https://files.catbox.moe/x6baaa.mp3',
        audio: '',
        duration: '176',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['34', '14', '18', '34']     
    },
    '34': {
        title: 'T.G.G.',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/9pez9u.mp3',
        duration: '210',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['35', '17', '19', '13']     
    },
    '35': {
        title: 'Второй том',
        artist: 'Keepitinside',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/fi1yxm.mp3',
        duration: '235',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['36', '10', '14', '24']     
    },
    '36': {
        title: 'Забытый бала',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/mrpjti.mp3',
        duration: '223',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['37', '26', '34', '19']     
    },
    '37': {
        title: '52 Герца',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/uvmg0m.mp3',
        duration: '266',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['38', '16', '17', '19']     
    },
    '38': {
        title: 'Пылает',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=430c732bcd9f505e61097720bcbc6edce154c402-4600332-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ehkibs.mp3',
        duration: '159',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['39', '15', '34', '17']     
    },
    '39': {
        title: 'Apt',
        artist: 'Rose, Bruno Mars',
        image: 'https://avatars.mds.yandex.net/i?id=b73748874e5b1cc755c2cf0a24010237_sr-11532301-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/mxvuvq.mp3',
        duration: '170',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['40', '15', '43', '19']     
    },
    '40': {
        title: 'Музе',
        artist: 'Santiz',
        image: 'https://avatars.mds.yandex.net/i?id=e2d1158c084fc20b7cd1a5db70b31e27e13f7632-7760813-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/jrbz76.mp3',
        duration: '190',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['41', '25', '21', '20']     
    },
    '41': {
        title: 'Я не спал',
        artist: 'Amourski',
        image: 'https://avatars.mds.yandex.net/i?id=0f54d60a2ac3cb673310f8b4bdd3b973fd2381c4-5859251-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/i9btk1.mp3',
        duration: '98',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['42', '10', '14', '17']     
    },
    '42': {
        title: 'Я не смогла',
        artist: 'SCIRENA',
        image: 'https://avatars.mds.yandex.net/i?id=8d747447e74db0a4a120c63b089abb36546120fc-6467438-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/w3u0ie.mp3',
        duration: '138',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['43', '21', '20', '17']     
    },
    '43': {
        title: 'Ты мой сон',
        artist: 'Убитый Счастьем',
        image: 'https://avatars.mds.yandex.net/i?id=fd4158e3421507c26aa781c7cb056fa7e080fe2f-10414034-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/1gc1uc.mp3',
        duration: '181',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['44', '25', '13', '36']     
    },
    '44': {
        title: 'Влюбился',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=be3645876e5d433fe695c1651b4f62bfdbd529d1-10963969-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/04m8gu.mp3',
        duration: '132',
        lyrics: [
        { text: "Нужна", time: 0 },
            { text: "Ты", time: 5 },
            { text: "Нужна", time: 10 },
            { text: "Ты", time: 15 }
        ],
        similar: ['1', '40', '12', '17']     
    },
    // Новый 02.08.2025
    "45": {
        title: 'Пери',
        artist: 'Islam',
        image: 'https://avatars.mds.yandex.net/i?id=b76ccf9750d07ac677c0a68327a6242ac8dc4f3a-16312632-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/iaaof0.mp3',
        duration: '212',
        lyrics: [
            { text: "Пока что текста нету", time: 0 },
        ],
        similar: ['46', '40', '12', '17']
    },
    '46': {
        title: 'Эне Тил',
        artist: 'Бегиш,Баястан,G-VOO',
        image: 'https://avatars.mds.yandex.net/i?id=3a38646e64fba85a428c91d578ef31a8_sr-10782253-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ytoo07.mp3',
        duration: '196',
        lyrics: [
            { text: "Пока что текста неу", time: 0 },
        ],
        similar: ['47', '40', '12', '17']
    },
    '47': {
        title: 'Кечигин',
        artist: 'Эрма',
        image: 'https://avatars.mds.yandex.net/i?id=c6bce6eae74903835218b9c2c966294504fba7b1-10328327-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/solnjn.mp3',
        duration: '',
        lyrics: [
            { text: "Пока что текста неу", time: 0 },
        ],
        similar: ['48', '40', '12', '17']
    },
    '48': {
        title: 'Кайрадан сен деп',
        artist: 'Islam',
        image: 'https://avatars.mds.yandex.net/i?id=707ecc54fdbbbf99dbc5856c31dec63651f2e674-4234038-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/mcj2z9.mp3',
        duration: '',
        lyrics: [
            { text: "Пока что текста неу", time: 0 },
        ],
        similar: ['49', '', '', '', '', '', '']
    },
    '49': {
        title: 'Love Me ',
        artist: 'Lil wayne,Drake,future',
        image: 'https://avatars.mds.yandex.net/i?id=049c1a1cae96c6100d45a5a34b9879870973725e0f40349d-12421635-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/h9wc2m.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['50', '', '', '', '', '', '']
    },
    '50': {
        title: 'Sagynbaimyn',
        artist: 'Asik, kanuraichik',
        image: 'https://avatars.mds.yandex.net/i?id=daa130fa5e0deff3e522457fa793414937fd6c77-16110296-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/x7hedz.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['51', '', '', '', '', '', '']
    },
    '51': {
        title: 'Романс',
        artist: 'PIZZA',
        image: 'https://avatars.mds.yandex.net/i?id=d28ad8c0b251d73fa418d7dea22853806871c18e-5350015-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/1q694p.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['52', '', '', '', '', '', '']
    },
    '52': {
        title: 'Killing my heart',
        artist: 'emingread',
        image: 'https://avatars.mds.yandex.net/i?id=23672004ff64e6537139410ed3c14780d8f01890-2367453-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/a6gbdg.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['53', '', '', '', '', '', '']
    },
    '53': {
        title: 'Рядом',
        artist: 'Akhan',
        image: 'https://avatars.mds.yandex.net/i?id=b17c3f889c095b0da329244d7fcf72aea02bbd02-10522468-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/1oybub.mp3',
        duration: '130',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['54', '', '', '', '', '', '']
    },
    '54': {
        title: 'Моя душа',
        artist: 'ANDRO',
        image: 'https://avatars.mds.yandex.net/i?id=d3c0d4fbbdacdcab0071776d59b59fe15dc7659a-4599759-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/jf4cyd.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['55', '', '', '', '', '', '']
    },
    //здесь конец
    '55': {
        title: 'Прекрасна',
        artist: 'Colorit',
        image: 'https://avatars.mds.yandex.net/i?id=7ffbe9e2063d2501c5dfb42c0c39103dd680c0c4-5226376-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/k1n5kd.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['56', '', '', '', '', '', '']
    },
    '56': {
        title: 'Моя пленница',
        artist: 'LKN,Ramil',
        image: 'https://avatars.mds.yandex.net/i?id=a7f668653eef4b4051f68b765aabfa87fd868b33-5542693-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/qf3nur.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['57', '', '', '', '', '', '']
    },
    '57': {
        title: 'Паталок',
        artist: 'TEDDYALISH,The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=4eccfcc12588a29bdfece5465fb38e4b73cc42cc-12422633-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/opv4st.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['58', '', '', '', '', '', '']
    },
    '58': {
        title: 'Love Again',
        artist: 'itssvd,Corbal,shiloh Dynasty',
        image: 'https://avatars.mds.yandex.net/i?id=0c724d9941167618380213a93df4e59d0308497a-5487639-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/dtzc9g.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['59', '', '', '', '', '', '']
    },
    '59': {
        title: 'Save My Soul',
        artist: 'SadBoyProlific, tomcbumpz',
        image: 'https://avatars.mds.yandex.net/i?id=0565232b6b112464b365f3491f674226f5dd52c7-5320304-images-thumbs&n=13',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['60', '', '', '', '', '', '']
    },
    '60': {
        title: 'Love is Beautifully',
        artist: 'Darkrose',
        image: 'https://files.catbox.moe/sda8fd.jpg',
        audio: 'https://files.catbox.moe/321dc6.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['61', '', '', '', '', '', '']
    },
    '61': {
        title: 'Потанцуй ты со мной',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=284764e76710cee758c354356bbca2d8b9d7baa574484772-12648253-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/rjptr5.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['62', '', '', '', '', '', '']
    },
    '62': {
        title: 'Душа',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=430c732bcd9f505e61097720bcbc6edce154c402-4600332-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/us7qmj.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['63', '', '', '', '', '', '']
    },
    '63': {
        title: 'Каждый день',
        artist: 'JAPYR, The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=c72d3f03609fed40883da1d7d5ebf33de64df735-3925790-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/9xx8y5.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['64', '', '', '', '', '', '']
    },
    '64': {
        title: 'Я буду',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=ca1e0dd065f7d19d3c4aac9fc96da0d395f47624-5672525-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/qjzml4.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['65', '', '', '', '', '', '']
    },
    '65': {
        title: 'Стань судьбой',
        artist: 'The Tetsoo, The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=926206bd546ef9c3c8c0272d033d3270ba75fd91-5235063-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/kuwmwz.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['66', '', '', '', '', '', '']
    },
    '66': {
        title: 'Гром и гроза ',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=ca86423916449ff18eae58ab992d673c4784d445-3659630-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/gfgpzk.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['67', '', '', '', '', '', '']
    },
    '67': {
        title: 'Свет мой ',
        artist: 'TONI',
        image: 'https://avatars.mds.yandex.net/i?id=e9ffd256177eff5e3ca74a40c3e88b878fb9f6fb-9855166-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/lyo5cg.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['68', '', '', '', '', '', '']
    },
    '68': {
        title: 'Лабиринт',
        artist: 'MOT, TONI, Роман Бестселлер',
        image: 'https://avatars.mds.yandex.net/i?id=b2e04f8e87a4e51d65bc9b30c252f37244200974-5233821-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/sa5j7g.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['69', '', '', '', '', '', '']
    },
    '69': {
        title: 'Обниму',
        artist: 'TONI',
        image: 'https://avatars.mds.yandex.net/i?id=804eb323a87d522b4345fb4b789c91076fde5599-5887629-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/hf7bsl.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['70', '', '', '', '', '', '']
    },
    '70': {
        title: 'Просто - сложно',
        artist: 'TONI,MOT',
        image: 'https://avatars.mds.yandex.net/i?id=0a1c278a70b6e7cdfd37fc291b3798f8933b94c1-4011233-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/rghqwb.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['71', '', '', '', '', '', '']
    },
    '71': {
        title: 'Мурашками',
        artist: 'MOT',
        image: 'https://avatars.mds.yandex.net/i?id=55b29cffe26a7c84002e8546d760824e2a5f6b64-5479741-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/3cmxqi.mp3',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['72', '', '', '', '', '', '']
    },
    '72': {
        title: 'Боже, как завидую',
        artist: 'HammAil & Navai, Jah Khalib',
        image: 'https://avatars.mds.yandex.net/i?id=62a0791f5760912491c2a1a9a4064e83286ae0fc-10805295-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/l7gwii.mp3',
        duration: '160',
        lyrics: [
            { text: "Боже, как завидую", time: 25 },
            { text: "Людям, что спят по ночам, спят по ночам, да", time: 27 },
            { text: "Мне во сне не видеть бы, да", time: 31 },
            { text: "Взгляд по ночам, твой взгляд по ночам, да", time: 34 },
            { text: "Боже, как завидую тем, кому звонят по ночам", time: 38 },
            { text: "И о чувствах кричат, да", time: 41 },
            { text: "Боже, как завидую, завидую, завидую", time: 44 },
            { text: "Грустный город спит, и в ночи", time: 51 },
            { text: "Счастливый вид, мы помолчим", time: 54 },
            { text: "И как от твоего сердца снова найти ключи?", time: 57 },
            { text: "Тише стучи, душа, свой разум ты включи", time: 61 },
            { text: "Градус сердца стремится ближе к нулю", time: 64 },
            { text: "Но эту песню для тебя я вновь спою", time: 67 },
            { text: "Тише стучи, ты не молчи", time: 70 },
            { text: "Ты всё прости и отпусти!", time: 74 },
            { text: "Боже, как завидую", time: 77 },
            { text: "Людям, что спят по ночам, спят по ночам, да", time: 79 },
            { text: "Мне во сне не видеть бы, да", time: 83 },
            { text: "Взгляд по ночам, твой взгляд по ночам, да", time: 85 },
            { text: "Боже, как завидую тем, кому звонят по ночам", time: 90 },
            { text: "И о чувствах кричат, да", time: 94 },
            { text: "Боже, как завидую, завидую, завидую", time: 96 },
            { text: "Задыхаюсь в одиночестве", time: 102 },
            { text: "Я хочу забыть, но опять никак", time: 106 },
            { text: "И влюбиться хочется (мне так хочется)", time: 109 },
            { text: "Но эта боль убьёт во мне романтика", time: 112 },
            { text: "Ты сказала: Я не вернусь", time: 116 },
            { text: "Но беспокоишь меня в моих снах", time: 120 },
            { text: "Искать похожих на тебя", time: 122 },
            { text: "Это так бессмысленно", time: 126 },
            { text: "Боже, как завидую", time: 129 },
            { text: "Людям, что спят по ночам, спят по ночам, да", time: 132 },
            { text: "Мне во сне не видеть бы, да", time: 135 },
            { text: "Взгляд по ночам, твой взгляд по ночам, да", time: 137 },
            { text: "Боже, как завидую тем, кому звонят по ночам", time: 142 },
            { text: "И о чувствах кричат, да", time: 145 },
            { text: "Боже, как завидую, завидую, завидую", time: 148 },
        ],
        similar: ['73', '61', '48', '34', '15', '67', '94']
    },
    '73': {
        title: 'А если это любовь?',
        artist: 'HammAli & Navai',
        image: 'https://avatars.mds.yandex.net/i?id=03c6a509a5d43377c2aa6b016e92be2f4c5d9d07-5318046-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/hhiepj.mp3',
        duration: '241',
        lyrics: [
            { text: "А если это любовь?", time: 15 },
            { text: "Чего печалишься ты?", time: 18 },
            { text: "Ведь сейчас пацаны просто так, без любви, дарят дамам цветы", time: 22 },
            { text: "А если это любовь?", time: 28 },
            { text: "Чего печалишься мы?", time: 32 },
            { text: "Ведь девчонки сейчас без любви признаются мужчинам в любви", time: 35 },
            { text: "Чего мне ваша любовь?", time: 42 },
            { text: "А мне и так хорошо", time: 46 },
            { text: "Говорила умеет любить", time: 49 },
            { text: "Но, по мне, ей учиться ещё (учиться ещё)", time: 52 },
            { text: "Твоя любовь в букетах роз", time: 57 },
            { text: "Что после выбросят в никуда кучу слов дежурных", time: 59 },
            { text: "Как жаль, что я тебе принёс свою любовь в цветах", time: 63 },
            { text: "Что после оказались в урне", time: 67 },
            { text: "Для чего вам любовь?", time: 70 },
            { text: "Вмиг сошлись и разошлись, остались обещания", time: 72 },
            { text: "Полюбить и разлюбить, словно по-умолчанию", time: 75 },
            { text: "До того, как ты уйдёшь — с тобой я попрощаюсь", time: 78 },
            { text: "Да, я помню о тебе, но даже не скучаю", time: 82 },
            { text: "Даже не скучаю (даже не скучаю)", time: 87 },
            { text: "Даже не скучаю (даже не скучаю)", time: 91 },
            { text: "Даже не скучаю по тебе, по тебе", time: 94 },
            { text: "А если это любовь? (А если это любовь?)", time: 98 },
            { text: "Чего печалишься ты? (Чего печалишься ты?)", time: 100 },
            { text: "Ведь сейчас пацаны просто так, без любви, дарят дамам цветы (дарят дамам цветы)", time: 104 },
            { text: "А если это любовь? (А если это любовь?)", time: 111 },
            { text: "Чего печалимся мы? (Чего печалимся мы?)", time: 114 },
            { text: "Ведь девчонки сейчас без любви признаются мужчинам в любви (мужчинам в любви)", time: 118 },
            { text: "Кто же знал, кто же знал как нашу любовь погубим?", time: 127 },
            { text: "Кто же знал, кто же знал, что же мы с тобой за люди?", time: 129 },
            { text: "Что же за, что же за глаза и слёзы под ними?", time: 134 },
            { text: "Кожу снял, кожу снял там, где было твоё имя!", time: 136 },
            { text: "Э-э-э! Мы сами знали, на что шли", time: 140 },
            { text: "И пусть сейчас мне так паршиво", time: 144 },
            { text: "Я под вином, мне башню закружило", time: 148 },
            { text: "Пока ты там где-то с другим вместе закружилась", time: 151 },
            { text: "Я после третьей стал смелее. Ну же!", time: 154 },
            { text: "Дорогу в три песни пробежал к тебе по лужам", time: 157 },
            { text: "Чтобы рассказала ты, как стало тебе лучше", time: 161 },
            { text: "Без того, кто в итоге не стал тебе мужем", time: 164 },
            { text: "А если это любовь?", time: 169 },
            { text: "Чего печалишься ты?", time: 173 },
            { text: "Ведь сейчас пацаны просто так, без любви, дарят дамам цветы", time: 176 },
            { text: "А если это любовь?", time: 180 },
            { text: "Чего печалишься мы?", time: 186 },
            { text: "Ведь девчонки сейчас без любви признаются мужчинам в любви", time: 190 },
            { text: "А если это любовь?", time: 197 },
            { text: "Чего печалишься ты?", time: 200 },
            { text: "Ведь сейчас пацаны просто так, без любви, дарят дамам цветы", time: 204 },
            { text: "А если это любовь?", time: 210 },
            { text: "Чего печалишься мы?", time: 214 },
            { text: "Ведь девчонки сейчас без любви признаются мужчинам в любви", time: 217 },
            { text: "Без любви", time: 225 },
            { text: "Без любви", time: 228 },        
        ],
        similar: ['74', '82', '67', '128', '167', '13', '48']
    },
    '74': {
        title: 'Прятки',
        artist: 'HammAil & Navai',
        image: 'https://avatars.mds.yandex.net/i?id=3b3faba7e213afa54f6d908c7f44df9690ff3402-5884402-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/g1kkwq.mp3',
        duration: '193',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['75', '105', '166', '200', '37', '109', '198']
    },
    '75': {
        title: 'Птичка ',
        artist: 'HammAil & Navai',
        image: 'https://avatars.mds.yandex.net/i?id=0fba121ea58183fb0bd40df15b45782eb969b0b6-5876178-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/rlde76.mp3',
        duration: '190',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['76', '18', '75', '47', '94', '186', '84']
    },
    '76': {
        title: 'Есенин',
        artist: 'NAVAI,MONA',
        image: 'https://avatars.mds.yandex.net/i?id=b4ef1650f3ab8163390b8bc84971ffd5ce990ab5-12384085-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ozti59.mp3',
        duration: '170',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['77', '72', '159', '135', '167', '28', '138']
    },
    '77': {
        title: 'Баллада',
        artist: 'Xcho, MOT',
        image: 'https://avatars.mds.yandex.net/i?id=d0795a3e7470b3e354dde7b8ebd56e0a4a085ca5-4904452-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/zxzrgz.mp3',
        duration: '179',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['78', '94', '154', '179', '168', '175', '134']
    },
    '78': {
        title: 'Где ты теперь и с кем',
        artist: 'Баста, HammAli & Navai',
        image: 'https://avatars.mds.yandex.net/i?id=f703020d9176d96406f88dfb0b7f1d41e1f3cdf9-5236457-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/fotelm.mp3',
        duration: '306',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['79', '138', '167', '197', '196', '145', '176']
    },
    '79': {
        title: 'Я ищу тебя',
        artist: 'Agape',
        image: 'https://avatars.mds.yandex.net/i?id=66325da9c82f9adc477e09ef30b330de1c9f05e6-5888121-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/hanlbx.mp3',
        duration: '155',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['80', '64', '158', '167', '173', '135', '123']
    },
    '80': {
        title: 'Моя',
        artist: 'Neki, ALEMOND,Xcho',
        image: 'https://avatars.mds.yandex.net/i?id=8d0f5e8161dbf6f4d0648cf517bc444791a4e2bd-12569754-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/hy425b.mp3',
        duration: '180',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['81', '196', '175', '197', '145', '135', '145']
    },
    '81': {
        title: 'Летняя звездная ночь',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=d59aab86cec39a48a548fe619a76626278db8b51-5905003-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/n2x93c.mp3',
        duration: '138',
        lyrics: [
            { text: "Текста нету", time: 0 },,
        ],
        similar: ['82', '67', '157', '135', '175', '134', '198']
    },
    '82': {
        title: 'Ты',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=28bba9671aff2deac1de151646be3226ed729f44-5236530-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/7ofe3l.mp3',
        duration: '174',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['83', '35', '145', '148', '134', '175', '119']
    },
    '83': {
        title: 'Тайнами - Dark Version',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=0acd2d909d588fe7d002cd07716a5469bd848214-4628413-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/bzunuz.mp3',
        duration: '146',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['84', '156', '163', '35', '168', '146', '135']
    },
    '84': {
        title: 'Ангельские глаза',
        artist: 'The Adresov',
        image: 'https://avatars.mds.yandex.net/i?id=eded2dd5338af5778236c778dee2bd49856458ee-4904401-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/vqsik0.mp3',
        duration: '168',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['85', '164', '175', '186', '147', '134', '176']
    },
    '85': {
        title: 'Утопай',
        artist: 'KhaliF',
        image: 'https://avatars.mds.yandex.net/i?id=1d1f1c6dffd88b81d98e06cd90ccbb3d42fac97c-5682441-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/gyvfmq.mp3',
        duration: '176',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['86', '46', '15', '142', '14', '96', '34']
    },
    '86': {
        title: 'Просто друг',
        artist: 'Nikitata',
        image: 'https://avatars.mds.yandex.net/i?id=e340ec15aed360fda34c5eae783271bd8986f632-5492246-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/iwi2zm.mp3',
        duration: '124',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['87', '46', '15', '147', '168', '153', '111']
    },
    '87': {
        title: 'Унеси река',
        artist: 'Nilo, Nuricko',
        image: 'https://avatars.mds.yandex.net/i?id=a2a5b938740af17ce678aa3c8aa088f33bcb2168-12940477-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/6ovloh.mp3',
        duration: '128',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['88', '15', '155', '175', '164', '147', '125']
    },
    '88': {
        title: 'Нотная слеза',
        artist: 'Bakr',
        image: 'https://avatars.mds.yandex.net/i?id=9e9bacf886b010ec9c65c886a236c22401d1b6ec-10285207-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/yx99ru.mp3',
        duration: '209',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['89', '49', '154', '75', '164', '94', '145']
    },
    '89': {
        title: 'Bas',
        artist: 'Shiza',
        image: 'https://avatars.mds.yandex.net/i?id=ba7c51fc6123a7bc7dada16cfb7182920d2e9818-13234616-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/yz70g2.mp3',
        duration: '131',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['90', '14', '154', '65', '175', '65', '124']
    },
    '90': {
        title: 'Пульс',
        artist: 'ALemond, Айни, Xcho',
        image: 'https://avatars.mds.yandex.net/i?id=4ede5e7d212028684e012f22acb85157f3b723ac-4590915-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/4glc52.mp3',
        duration: '160',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['91', '144', '89', '124', '65', '186', '42']
    },
    '91': {
        title: 'Южный спутник',
        artist: 'Nuricko',
        image: 'https://avatars.mds.yandex.net/i?id=265268e46ad8956d1ca48b15f1efa3b1e2b84f45-4593379-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/8o6i71.mp3',
        duration: '91',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['92', '165', '24', '186', '84', '176', '69']
    },
    '92': {
        title: 'MAM',
        artist: 'TEKSIDR',
        image: 'https://avatars.mds.yandex.net/i?id=5ee88293054aa4c9ea8b6c81b9a60a8ba71a85d4-5587421-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/k4l05m.mp3',
        duration: '151',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['93', '164', '96', '175', '94', '137', '58']
    },
    '93': {
        title: 'Мой счастливый билет',
        artist: 'Nuricko',
        image: 'https://avatars.mds.yandex.net/i?id=fac5559c9655df496931346b2dc7e23df1bd6e79-2855903-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/k8dn2h.mp3',
        duration: '164',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['94', '165', '48', '154', '87', '146', '99']
    },
    '94': {
        title: 'Клятвы',
        artist: 'Asik',
        image: 'https://avatars.mds.yandex.net/i?id=fca01712ed341325f5ca3a43283908f19d5052b9-11459613-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/xpyd6y.mp3',
        duration: '138',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['95', '165', '48', '175', '57', '167', '74']
    },
    '95': {
        title: 'Могила',
        artist: 'Nuricko',
        image: 'https://avatars.mds.yandex.net/i?id=01a8f9db78fda2cdb4937acd89de92293d03d28b-5858835-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/08ba9r.mp3',
        duration: '101',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['96', '145', '19', '157', '11', '176', '46']
    },
    '96': {
        title: 'Привет',
        artist: 'Bakr',
        image: 'https://avatars.mds.yandex.net/i?id=2390006caa3d92e0c74ad33e37d6462e88470956-9837315-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/5dtfzi.mp3',
        duration: '155',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['97', '157', '45', '166', '55', '194', '64']
    },
    '97': {
        title: 'Боль внутри',
        artist: 'YURRVCH',
        image: 'https://avatars.mds.yandex.net/i?id=21525d6ef3de978896afdab3f682c8b67a1a1360-10126215-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/sra83h.mp3',
        duration: '150',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['98', '', '', '', '', '', '']
    },
    '98': {
        title: 'Без твоей любви',
        artist: 'ADALYA',
        image: 'https://avatars.mds.yandex.net/i?id=6c81c9e0904a085af7197f1d60bbc651c209f576-6955462-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/1zpew4.mp3',
        duration: '178',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['99', '165', '45', '175', '91', '134', '54']
    },
    '99': {
        title: 'С тобой',
        artist: 'Nuricko,Ulukmanapo',
        image: 'https://avatars.mds.yandex.net/i?id=f29934cf679ada80554b04b9d39c4e9b9cfadc13-4013935-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/rc2wa9.mp3',
        duration: '225',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['100', '45', '145', '98', '167', '52', '145']
    },
    '100': {
        title: 'Люби меня',
        artist: 'Rvmvn',
        image: 'https://avatars.mds.yandex.net/i?id=f027a1c2cb759a936628febe784b47349d30ba66-5512130-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ovn5so.mp3',
        duration: '201',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['101', '45', '154', '48', '134', '85', '134']
    },
    '101': {
        title: 'Моя мечта',
        artist: 'Colorit',
        image: 'https://avatars.mds.yandex.net/i?id=23176de1310c3259c8afd8ff3e998182b317a96d-10172829-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/o2w2ej.mp3',
        duration: '116',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['102', '15', '166', '34', '184', '64', '142']
    },
    '102': {
        title: 'Ночной город',
        artist: 'Asik',
        image: 'https://avatars.mds.yandex.net/i?id=bc0b8942b63f9daf296481554f5f6a8edc96ce29-5134183-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/s7ircj.mp3',
        duration: '187',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['103', '94', '148', '64', '175', '25', '111']
    },
    '103': {
        title: 'В любом виде унайсын',
        artist: 'Bonapart',
        image: 'https://avatars.mds.yandex.net/i?id=15686a8425cd202a4d5c4caff6961905bed82a5a-4469612-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/vsvfcb.mp3',
        duration: '171',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['104', '65', '175', '64', '175', '94', '124']
    },
    '104': {
        title: 'Как je',
        artist: 'Macan, Kiliana',
        image: 'https://avatars.mds.yandex.net/i?id=ce1770ca3bad2780fe69fb2c217a59ac2cdfbdea-10036219-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/0obcqa.mp3',
        duration: '153',
        lyrics: [
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
            { text: "", time: 0 },
        ],
        similar: ['105', '64', '124', '78', '194', '45', '168']
    },
    '105': {
        title: 'Любовь как сон',
        artist: 'Ulukmanapo,Бегиш',
        image: 'https://avatars.mds.yandex.net/i?id=59612cf1bfa1ec090c8c02b8ab6a2f88507ab8bd-6579542-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/uusaop.mp3',
        duration: '190',
        lyrics: [
            { text: "Менин сүйүүм арманда", time: 0 },
            { text: "Сенин сүйүүң жалганбы", time: 0 },
            { text: "Жолубуз адашып калганбы", time: 0 },
            { text: "Айтылган сөздөр эми жалганбы", time: 0 },
            { text: "Менин сүйүүм арманда", time: 0 },
            { text: "Сенин сүйүүң жалганбы", time: 0 },
            { text: "Жолубуз адашып калганбы", time: 0 },
            { text: "Айтылган сөздөр эми жалганбы", time: 0 },
            { text: "Моя любовь, ты же знаешь меня", time: 0 },
            { text: "Твои глаза видят то, что не вижу я", time: 0 },
            { text: "Без ума от тебя, ведь ты не такая, как все", time: 0 },
            { text: "Образец всем леди, предел моих мечтаний", time: 0 },
            { text: "Твоя нежность манит моё сердце", time: 0 },
            { text: "Твой голос божествен", time: 0 },
            { text: "Знай, я всегда был с тобою честен", time: 0 },
            { text: "Чувства не только в песне, но жаль", time: 0 },
            { text: "Это всего лишь нарисованная сказка", time: 0 },
            { text: "Без всяких лишних красок", time: 0 },
            { text: "И между нами расстояние", time: 0 },
            { text: "Постоянно я думаю лишь о тебе", time: 0 },
            { text: "Прошу, любви своей дай мне", time: 0 },
            { text: "Всё останется в памяти, в тайне", time: 0 },
            { text: "Мы вдвоём ветром унесённые", time: 0 },
            { text: "Менин сүйүүм арманда", time: 0 },
            { text: "Сенин сүйүүң жалганбы", time: 0 },
            { text: "Жолубуз адашып калганбы", time: 0 },
            { text: "Айтылган сөздөр эми жалганбы", time: 0 },
            { text: "Менин сүйүүм арманда", time: 0 },
            { text: "Сенин сүйүүң жалганбы", time: 0 },
            { text: "Жолубуз адашып калганбы", time: 0 },
            { text: "Айтылган сөздөр эми жалганбы", time: 0 },
            { text: "Сенин жүзүң керемет Бүбүсарадай", time: 0 },
            { text: "Ойлонбой жүрө берсең болот күзгү карабай", time: 0 },
            { text: "Жаныңда сөзүм таппай каламын жаш баладай", time: 0 },
            { text: "Чыңгызың болдум сенин, ак сүйүүңө жарабай", time: 0 },
            { text: "Китепсиң окуйм сени шамчырагым жагып", time: 0 },
            { text: "Менин тамчылады жашым, сенин беттериңе агып", time: 0 },
            { text: "Сага болгон катты дептериме жазып", time: 0 },
            { text: "Сүйүү кептерине бердим түшүмдөн ойгонуп алып", time: 0 },
            { text: "Дүйнөнүн периси мен үчүн сенсиң", time: 0 },
            { text: "Жүрөктүн даарысы мен үчүн сенсиң", time: 0 },
            { text: "Сенден башкага жүрөгүмдө оорун жок", time: 0 },
            { text: "Сен бар үчүн бул өмүрдө жүрөгүм ток", time: 0 },
            { text: "Менин сүйүүм арманда", time: 0 },
            { text: "Сенин сүйүүң жалганбы", time: 0 },
            { text: "Жолубуз адашып калганбы", time: 0 },
            { text: "Айтылган сөздөр эми жалганбы", time: 0 },
            { text: "Менин сүйүүм арманда", time: 0 },
            { text: "Сенин сүйүүң жалганбы", time: 0 },
            { text: "Жолубуз адашып калганбы", time: 0 },
            { text: "Айтылган сөздөр эми жалганбы", time: 0 },
        ],
        similar: ['106', '64', '175', '13', '187', '67', '195']
    },
    '106': {
        title: 'Принцесса',
        artist: 'akha',
        image: 'https://avatars.mds.yandex.net/i?id=177c063bac0b50a0de504d63dd3335deb8181e7a-5916763-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/kopu3l.mp3',
        duration: '171',
        lyrics: [
            { text: "И снова месяц май и снова коридоры", time: 0 },
            { text: "Замечаю что-то не так и мы опять в ссоре", time: 0 },
            { text: "Нежность, воздух, тепло, море", time: 0 },
            { text: "И что же из всего осталось в итоге", time: 0 },
            { text: "Миллион картин, несколько прохожих", time: 0 },
            { text: "Оставляют свой след, чтобы подытожишь", time: 0 },
            { text: "Закрыть эмоции, и не показывать их больше", time: 0 },
            { text: "Больше не хочу, оставаться в этой ночи", time: 0 },
            { text: "Я вспоминаю цвет твоих очей", time: 0 },
            { text: "И начинаю все теряться в ней", time: 0 },
            { text: "Прокричит мое сердце", time: 0 },
            { text: "Одной тобой хочу согреться", time: 0 },
            { text: "А разговоры нежными гудками", time: 0 },
            { text: "Я продолжаю ждать тебя ночами", time: 0 },
            { text: "Влюбила ты меня моя принцесса", time: 0 },
            { text: "От тебя мне никуда не деться", time: 0 },
            { text: "Суета сердец, а что же нам осталось", time: 0 },
            { text: "Могли с тобою хоть немного сохранить малость", time: 0 },
            { text: "Убрать немного гордость и оставить радость", time: 0 },
            { text: "И мы решили под конец раскрыть парус", time: 0 },
            { text: "Как теперь мне жить, как тебя простить", time: 0 },
            { text: "Закрыть глаза на все и просто отпустить", time: 0 },
            { text: "Прости мне небо мстит и аромат таит", time: 0 },
            { text: "И вот конец истории и мне пора забыть", time: 0 },
            { text: "Я вспоминаю цвет твоих очей", time: 0 },
            { text: "И начинаю все теряться в ней", time: 0 },
            { text: "Прокричит мое сердце", time: 0 },
            { text: "Одной тобой хочу согреться", time: 0 },
            { text: "А разговоры нежными гудками", time: 0 },
            { text: "Я продолжаю ждать тебя ночами", time: 0 },
            { text: "Влюбила ты меня моя принцесса", time: 0 },
            { text: "От тебя мне никуда не деться", time: 0 },
            { text: "Я вспоминаю цвет твоих очей", time: 0 },
            { text: "И начинаю все теряться в ней", time: 0 },
            { text: "Прокричит мое сердце", time: 0 },
            { text: "Одной тобой хочу согреться", time: 0 },
            { text: "А разговоры нежными гудками", time: 0 },
            { text: "Я продолжаю ждать тебя ночами", time: 0 },
            { text: "Влюбила ты меня моя принцесса", time: 0 },
            { text: "От тебя мне никуда не деться", time: 0 },
            { text: "♪", time: 0 },
            { text: "Я вспоминаю цвет твоих очей", time: 0 },
            { text: "И начинаю все теряться в ней", time: 0 },
            { text: "Прокричит мое сердце", time: 0 },
            { text: "Одной тобой хочу согреться", time: 0 },
            { text: "А разговоры нежными гудками", time: 0 },
            { text: "Я продолжаю ждать тебя ночами", time: 0 },
            { text: "Влюбила ты меня моя принцесса", time: 0 },
        ],
        similar: ['107', '51', '145', '22', '179', '32', '141']
    },
    '107': {
        title: 'Рядом',
        artist: 'akha',
        image: 'https://avatars.mds.yandex.net/i?id=b17c3f889c095b0da329244d7fcf72aea02bbd02-10522468-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/1oybub.mp3',
        duration: '131',
        lyrics: [
            { text: "Я хочу, чтоб ты была рядом", time: 0 },
            { text: "Когда ты со мной, мне больше ничего не надо", time: 0 },
            { text: "Этой, этой, этой ночью под звездопадом", time: 0 },
            { text: "Я загадаю, чтоб ты была рядом", time: 0 },
            { text: "Я хочу, чтоб ты была рядом", time: 0 },
            { text: "Когда ты со мной, мне больше ничего не надо", time: 0 },
            { text: "Этой, этой, этой ночью под звездопадом", time: 0 },
            { text: "Я загадаю, чтоб ты была рядом", time: 0 },
            { text: "А я куплю тебе букетик цветов", time: 0 },
            { text: "Уайя, ведь ты причина моих хитов", time: 0 },
            { text: "Ты моя, и я готов быть верным котом", time: 0 },
            { text: "Твоим, твоим", time: 0 },
            { text: "Кап-кап-кап-кап-капает дождик", time: 0 },
            { text: "А в моей голове один и тот же вопрос", time: 0 },
            { text: "Как так, как так без тебя сложно", time: 0 },
            { text: "Я так хочу к тебе, ведь мне с тобой повезло", time: 0 },
            { text: "Я хочу, чтоб ты была рядом", time: 0 },
            { text: "Когда ты со мной, мне больше ничего не надо", time: 0 },
            { text: "Этой, этой, этой ночью под звездопадом", time: 0 },
            { text: "Я загадаю, чтоб ты была рядом", time: 0 },
            { text: "Я хочу, чтоб ты была рядом", time: 0 },
            { text: "Когда ты со мной, мне больше ничего не надо", time: 0 },
            { text: "Этой, этой, этой ночью под звездопадом", time: 0 },
            { text: "Я загадаю, чтоб ты была рядом", time: 0 },
            { text: "Я хочу, чтоб ты была рядом", time: 0 },
            { text: "Когда ты со мной, мне больше ничего не надо", time: 0 },
            { text: "Этой, этой, этой ночью под звездопадом", time: 0 },
            { text: "Я загадаю, чтоб ты была рядом", time: 0 },
        ],
        similar: ['108', '33', '121', '14', '123', '41', '172']
    },
    '108': {
        title: 'Аиша',
        artist: 'Akha',
        image: 'https://avatars.mds.yandex.net/i?id=91924fb598c5129230876232691bba448d80aa2b-5222489-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/kvv0sn.mp3',
        duration: '135',
        lyrics: [
            { text: "Аиша, хочу, чтоб ты была со мной", time: 0 },
            { text: "Аиша, между небом и землей я еле слышно", time: 0 },
            { text: "Попрошу твоей руки, моя Аиша, Аиша", time: 0 },
            { text: "Ты всё поймешь по моим глазам", time: 0 },
            { text: "Прочитаешь меня между строк", time: 0 },
            { text: "Никому тебя не отдам", time: 0 },
            { text: "Ведь тебя подарил мне Бог", time: 0 },
            { text: "Ты поверь мне, я не солгу", time: 0 },
            { text: "Чтобы любовь твою сохранить", time: 0 },
            { text: "Я на веки-веков хочу", time: 0 },
            { text: "С тобой быть", time: 0 },
            { text: "Аиша, хочу, чтоб ты была со мной", time: 0 },
            { text: "Аиша, между небом и землей я еле слышно", time: 0 },
            { text: "Попрошу твоей руки, моя Аиша, Аиша", time: 0 },
            { text: "Аиша, я хочу, чтоб ты была собой", time: 0 },
            { text: "Аиша, между небом и землей я еле слышно", time: 0 },
            { text: "Назову тебя своей женой, Аиша, Аиша", time: 0 },
            { text: "Я упал сто шагов назад", time: 0 },
            { text: "И я встать бы один не смог", time: 0 },
            { text: "Ведь когда себя потерял", time: 0 },
            { text: "Путь тобой указал мне Бог", time: 0 },
            { text: "Ты поверь мне, я не солгу", time: 0 },
            { text: "Чтобы любовь твою сохранить", time: 0 },
            { text: "Я на веки-веков хочу", time: 0 },
            { text: "С тобой быть", time: 0 },
            { text: "Аиша, хочу, чтоб ты была со мной", time: 0 },
            { text: "Аиша, между небом и землей я еле слышно", time: 0 },
            { text: "Попрошу твоей руки, моя Аиша, Аиша", time: 0 },
            { text: "Аиша, я хочу, чтоб ты была собой", time: 0 },
            { text: "Аиша, между небом и землей я еле слышно", time: 0 },
            { text: "Назову тебя своей женой, Аиша, Аиша", time: 0 },
        ],
        similar: ['109', '51', '145', '13', '176', '12', '176']
    },
    '109': {
        title: 'Шанс',
        artist: 'Akha',
        image: 'https://avatars.mds.yandex.net/i?id=ac293681893bf73051add8f43298a9f6cfa0afa9-8522161-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/g8os6b.mp3',
        duration: '156',
        lyrics: [
            { text: "Ты дала мне шанс, ведь ты знала, что я смогу", time: 0 },
            { text: "Между нами связь, и терять её не хочу", time: 0 },
            { text: "Мы танцуем вальс, смотрим в небо на берегу", time: 0 },
            { text: "Ведь ты дала мне шанс, ты дала мне шанс", time: 0 },
            { text: "Далеко полетим, делай визу", time: 0 },
            { text: "Эконом позади, только бизнес", time: 0 },
            { text: "Не думай ни о чём, воплоти все капризы", time: 0 },
            { text: "Сейчас мы высоко, улыбнись Мона Лизе", time: 0 },
            { text: "Мы не актёры, но это кино", time: 0 },
            { text: "Сценарий эффект домино", time: 0 },
            { text: "Я покупаю тебе всё, что хочешь", time: 0 },
            { text: "Теперь мы мажоры, но помним минор", time: 0 },
            { text: "Когда потянуло на дно", time: 0 },
            { text: "Ты подняла меня в топ", time: 0 },
            { text: "Твоя улыбка пьянит меня сильно", time: 0 },
            { text: "Так дико, что я отрицаю вино", time: 0 },
            { text: "Ты дала мне шанс, ведь ты знала, что я смогу", time: 0 },
            { text: "Между нами связь и терять её не хочу", time: 0 },
            { text: "Мы танцуем вальс, смотрим в небо на берегу", time: 0 },
            { text: "Ведь ты дала мне шанс, ты дала мне шанс", time: 0 },
            { text: "Ты дала мне шанс, ведь ты знала, что я смогу", time: 0 },
            { text: "Между нами связь, и терять её не хочу", time: 0 },
            { text: "Мы танцуем вальс, смотрим в небо на берегу", time: 0 },
            { text: "Ведь ты дала мне шанс, ты дала мне шанс", time: 0 },
            { text: "Выкинь все старые платья, давай купим новые", time: 0 },
            { text: "Мы заработали всё, не пришли на готовое", time: 0 },
            { text: "Отныне все месяцы пусть будут только медовые", time: 0 },
            { text: "Песни хитовые, евро и доллары тратим без повода", time: 0 },
            { text: "Всё на тебя, ты меня вдохновляешь", time: 0 },
            { text: "И я боюсь это всё потерять", time: 0 },
            { text: "Мой материал, чтобы твой материал был дороже, любимая, смело сияй", time: 0 },
            { text: "Dolce, Celine или Prada, Gucci и Balenciaga", time: 0 },
            { text: "Бери всё, что хочешь, поверь, мне не жаль на тебя", time: 0 },
            { text: "Ведь ты знаешь", time: 0 },
            { text: "Ты всё, что мне надо", time: 0 },
            { text: "Ты дала мне шанс, ведь ты знала, что я смогу", time: 0 },
            { text: "Между нами связь, и терять её не хочу", time: 0 },
            { text: "Мы танцуем вальс, смотрим в небо на берегу", time: 0 },
            { text: "Ведь ты дала мне шанс, ты дала мне шанс", time: 0 },
            { text: "Ты дала мне шанс, ведь ты знала, что я смогу", time: 0 },
            { text: "Между нами связь, и терять её не хочу", time: 0 },
            { text: "Мы танцуем вальс, смотрим в небо на берегу", time: 0 },
            { text: "Ведь ты дала мне шанс, ты дала мне шанс", time: 0 },
        ],
        similar: ['110', '21', '172', '123', '11', '111', '14']
    },
    '110': {
        title: 'Не навечно',
        artist: 'akha, Ruhsora Emm',
        image: 'https://avatars.mds.yandex.net/i?id=a0a30e65cf68ce66513498e91e70b7fefd7db43d-5834638-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/xqc8xt.mp3',
        duration: '124',
        lyrics: [
            { text: "Больше не хочешь", time: 0 },
            { text: "Понимать", time: 0 },
            { text: "Я не знаю как сказать", time: 0 },
            { text: "Каждый день как кинотеатр", time: 0 },
            { text: "Теперь мы смотрим", time: 0 },
            { text: "Наблюдаем", time: 0 },
            { text: "Позируем,стараемся", time: 0 },
            { text: "Пытаемся не потеряться", time: 0 },
            { text: "Давно забытые чувства", time: 0 },
            { text: "Не могут оставаться", time: 0 },
            { text: "В опечаленной грусти", time: 0 },
            { text: "Здрастье, здрастье", time: 0 },
            { text: "Всё как в старой киноленте", time: 0 },
            { text: "Тихо, сыро, пусто", time: 0 },
            { text: "Жизнь сериал", time: 0 },
            { text: "Люди больше не живут", time: 0 },
            { text: "Люди наблюдают", time: 0 },
            { text: "Собирают лайк", time: 0 },
            { text: "Помогает копирайт", time: 0 },
            { text: "В этот", time: 0 },
            { text: "Жесткий вайб", time: 0 },
            { text: "Айтшы саган не унайды?", time: 0 },
            { text: "Окпелемей маган айт", time: 0 },
            { text: "Айтшы саган не унайды?", time: 0 },
            { text: "Окпелемей маган айт", time: 0 },
            { text: "Ты не ожидал, но я снесу тебе башню", time: 0 },
            { text: "Если ты не знал малышку, I'm from Tashkent", time: 0 },
            { text: "На своих куплетах наворачиваю шашки", time: 0 },
            { text: "Нашим и вашим, беш или шашлык", time: 0 },
            { text: "Я могу сама поднять себе Луи Витон", time: 0 },
            { text: "Manga farqi yoq, поменяй тон", time: 0 },
            { text: "Sho'ttanam заметила я твой дешевый понт", time: 0 },
            { text: "Мое имя Рух, better than yours", time: 0 },
        ],
        similar: ['111', '16', '144', '176', '45', '168', '24']
    },
    '111': {
        title: 'Insomnia',
        artist: 'akha',
        image: 'https://avatars.mds.yandex.net/i?id=177c063bac0b50a0de504d63dd3335deb8181e7a-5916763-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/o9fcz6.mp3',
        duration: '163',
        lyrics: [
            { text: "Миг, в котором ты и я", time: 0 },
            { text: "Где мы, как Инь и Янь", time: 0 },
            { text: "Сжигаем расстояния", time: 0 },
            { text: "Миг, в котором ты моя", time: 0 },
            { text: "Моя гармония", time: 0 },
            { text: "Моя инсомния", time: 0 },
            { text: "Дай мне понять все чувства, что в глазах твоих", time: 0 },
            { text: "Тайны манят, и пусть нам их не утаить", time: 0 },
            { text: "Но оберегать от остальных", time: 0 },
            { text: "Нам надо бежать, сжигать мосты", time: 0 },
            { text: "Чтоб не потерять мир красоты", time: 0 },
            { text: "Твоей души", time: 0 },
            { text: "Давай растянем", time: 0 },
            { text: "Миг, в котором ты и я", time: 0 },
            { text: "Где мы, как Инь и Янь", time: 0 },
            { text: "Сжигаем расстояния", time: 0 },
            { text: "Миг, в котором ты моя", time: 0 },
            { text: "Моя гармония", time: 0 },
            { text: "Моя инсомния", time: 0 },
            { text: "Готова ли ты принять", time: 0 },
            { text: "Меня таким, как есть?", time: 0 },
            { text: "Чтоб разделить со мной мгновение", time: 0 },
            { text: "Под взглядами небес", time: 0 },
            { text: "Ты не смотри назад", time: 0 },
            { text: "Только сейчас и здесь", time: 0 },
            { text: "И мы отбросим все сомнения", time: 0 },
            { text: "Давай растянем", time: 0 },
            { text: "Миг, в котором ты и я", time: 0 },
            { text: "Где мы, как Инь и Янь", time: 0 },
            { text: "Сжигаем расстояния", time: 0 },
            { text: "Миг, в котором ты моя", time: 0 },
            { text: "Моя гармония", time: 0 },
            { text: "Моя инсомния", time: 0 },
            { text: "Миг, в котором ты и я", time: 0 },
            { text: "Где мы, как Инь и Янь", time: 0 },
            { text: "Сжигаем расстояния", time: 0 },
            { text: "Миг, в котором ты моя", time: 0 },
            { text: "Моя гармония", time: 0 },
            { text: "Моя инсомния", time: 0 },

        ],
        similar: ['112', '65', '145', '197', '34', '139', '67']
    },
    '112': {
        title: 'Он и она',
        artist: 'Jah Khalib, akha',
        image: 'https://avatars.mds.yandex.net/i?id=bd4f6fd2352015b9ff574f25f704a335d9c8f9d8-4560317-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/8kn6j0.mp3',
        duration: '143',
        lyrics: [
            { text: "Он и она словно свет и тень", time: 0 },
            { text: "Он и она - это ночь и день", time: 0 },
            { text: "Он и она, мимо всех людей", time: 0 },
            { text: "Счастья им дал Всевышний", time: 0 },
            { text: "Ты мне поверь", time: 0 },
            { text: "Он и она, кистью на холсте", time: 0 },
            { text: "Он и она, счастье в тишине", time: 0 },
            { text: "Он и она, он и она", time: 0 },
            { text: "Хранить свой очаг и слышать смех детей", time: 0 },
            { text: "(Okay) Поджигаю трубку, отвечаю грубо", time: 0 },
            { text: "Извини родная, на работе словно в дурке", time: 0 },
            { text: "Взял кофе у турков, на плите поставил турку", time: 0 },
            { text: "Вместо сахара - тебя, ты - моя сладкая текстурка", time: 0 },
            { text: "Молю Бога подарить нам деток", time: 0 },
            { text: "Побольше счастья и поменьше нервов", time: 0 },
            { text: "Я неадекватный, я знаю, ты прости меня за это", time: 0 },
            { text: "Ты - моя принцесса, ты - мой яркий лучик света!", time: 0 },
            { text: "Я твой чернобровый чечик, твой романтик, хулиган", time: 0 },
            { text: "Ты - мой миленький порядок, я - твой жёсткий балаган!", time: 0 },
            { text: "Ты - мой Южный, город моря, я - горная Алмата", time: 0 },
            { text: "Ты - мой мир, ты - мой покой, а я - чисто суета", time: 0 },
            { text: "♪", time: 0 },
            { text: "Ты - моя муза, да, а я - грубая простота", time: 0 },
            { text: "А если коротко и ясно: ты - та (именно та, э)", time: 0 },
            { text: "Он и она словно свет и тень", time: 0 },
            { text: "Он и она - это ночь и день", time: 0 },
            { text: "Он и она, мимо всех людей", time: 0 },
            { text: "Счастья им дал Всевышний", time: 0 },
            { text: "Ты мне поверь", time: 0 },
            { text: "Он и она, кистью на холсте", time: 0 },
            { text: "Он и она, счастье в тишине", time: 0 },
            { text: "Она и она, он и она", time: 0 },
            { text: "Хранить свой очаг и слышать смех детей", time: 0 },
            { text: "Он и она словно свет и тень", time: 0 },
            { text: "Он и она - это ночь и день", time: 0 },
            { text: "Он и она, мимо всех людей", time: 0 },
            { text: "Счастья им дал Всевышний", time: 0 },
            { text: "Ты мне поверь", time: 0 },
        ],
        similar: ['113', '45', '145', '197', '172', '24', '11']
    },
    '113': {
        title: 'Какая ты красивая',
        artist: 'akha',
        image: 'https://avatars.mds.yandex.net/i?id=08c44fff8a0bfb6448e00df183a4a90aa602e63a-4470366-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/z395v5.mp3',
        duration: '191',
        lyrics: [
            { text: "Текста нету", time: 0 },
        ],
        similar: ['114', '55', '44', '33', '22', '11', '99']
    },
    '115': {
        title: 'Халат',
        artist: 'Ирина Кайратовна, yelaman',
        image: 'https://avatars.mds.yandex.net/i?id=55772f7cd50428ae0e6272358c6ff11b7831a707-4818427-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/lei8oa.mp3',
        duration: '215',
        lyrics: [
            {"text": "Скандал, в моей квартире ураган, да", "time": 13},
    {"text": "Ты вся горишь, но мне прохладно", "time": 19},
    {"text": "И знаешь все, что мне там надо", "time": 22},
    {"text": "Под твоим халатом о-о-о", "time": 9},
    {"text": "Скандал, в моей квартире ураган, да", "time": 12},
    {"text": "Ты вся горишь, но мне прохладно", "time": 15},
    {"text": "И знаешь все, что мне там надо", "time": 18},
    {"text": "Под твоим халатом о-о-о", "time": 21},
    {"text": "Я (я) пыль (пыль), ты (ты) глина (глина)", "time": 24},
    {"text": "Я (я) ил (ил), ты (ты) тина (тина)", "time": 27},
    {"text": "Интима хотим мы дико", "time": 30},
    {"text": "Но запрещает книга", "time": 33},
    {"text": "Такая доктрина", "time": 36},
    {"text": "А ты любишь играть в детектива", "time": 39},
    {"text": "Где бы я не был", "time": 42},
    {"text": "Ты хочешь знать каждый мой шаг", "time": 45},
    {"text": "Мы на брудершафт выпьем", "time": 48},
    {"text": "Подышать выйдем", "time": 51},
    {"text": "Ты типа мне шанс выдашь", "time": 54},
    {"text": "По всем падежам выдашь", "time": 57},
    {"text": "И я не веря ушам", "time": 60},
    {"text": "К чему ты движешь мне крышу", "time": 63},
    {"text": "Скандал, в моей квартире ураган, да", "time": 66},
    {"text": "Ты вся горишь, но мне прохладно", "time": 69},
    {"text": "И знаешь все, что мне там надо", "time": 72},
    {"text": "Под твоим халатом о-о-о", "time": 75},
    {"text": "Скандал, в моей квартире ураган, да", "time": 78},
    {"text": "Ты вся горишь, но мне прохладно", "time": 81},
    {"text": "И знаешь все, что мне там надо", "time": 84},
    {"text": "Под твоим халатом о-о-о", "time": 87},
    {"text": "Wow, wow, я дома", "time": 90},
    {"text": "Все в slow mo, в дыму забудусь", "time": 93},
    {"text": "Твой взгляд тут нагоняет ужас", "time": 96},
    {"text": "По ходу сегодня остались без ужина", "time": 99},
    {"text": "Я представляю такой тебя в кружевах", "time": 102},
    {"text": "Да, посадка на кровать", "time": 105},
    {"text": "Мы оба устали выяснять все", "time": 108},
    {"text": "А толку?", "time": 111},
    {"text": "Неуместных шуток полно тут", "time": 114},
    {"text": "Все уходит в прикол", "time": 117},
    {"text": "А ты просто киваешь рукой (ладно)", "time": 120},
    {"text": "Знаю, как сложно понять меня в разговоре", "time": 123},
    {"text": "Я сам себе неудобен, честно", "time": 126},
    {"text": "Ты думаешь все это бесполезно", "time": 129},
    {"text": "Но как все не было здесь...", "time": 132},
    {"text": "Скандал, в моей квартире ураган, да", "time": 135},
    {"text": "Ты вся горишь, но мне прохладно", "time": 138},
    {"text": "И знаешь все, что мне там надо", "time": 141},
    {"text": "Под твоим халатом о-о-о", "time": 144},
    {"text": "Скандал, в моей квартире ураган, да", "time": 147},
    {"text": "Ты вся горишь, но мне прохладно", "time": 150},
    {"text": "И знаешь все, что мне там надо", "time": 153},
    {"text": "Под твоим халатом о-о-о", "time": 156},
    {"text": "Бүгін біздің пәтер ураганда, біз шулағанда", "time": 159},
    {"text": "Жаман қарамаңдар көршілері", "time": 162},
    {"text": "Скандалить етуден бас жүлде, көздерден", "time": 165},
    {"text": "Нөсер жауын күтілуде бүгін түнде", "time": 168},
    {"text": "Айқай - шу қайтадан басталды", "time": 171},
    {"text": "Ыдыс сынды, жиһаз қиралды", "time": 174},
    {"text": "Жасы ақты, кетті тоналка", "time": 177},
    {"text": "Қайдан ойлап таптың тоқалды?", "time": 180},
    {"text": "Шешеме кетем дейді!", "time": 183},
    {"text": "Не үшін кездескем дейді", "time": 186},
    {"text": "Затты алып кетем дейді", "time": 189},
    {"text": "Әңгімесі бітпейді", "time": 192},
    {"text": "Кетем дейді, бірақ кетпейді", "time": 195},
    {"text": "PehжидI қайтадан!", "time": 198},
    {"text": "Скандал, в моей квартире ураган, да", "time": 201},
    {"text": "Ты вся горишь, но мне прохладно", "time": 204},
    {"text": "И знаешь все, что мне там надо", "time": 207},
    {"text": "Под твоим халатом о-о-о", "time": 210},
    {"text": "Скандал, в моей квартире ураган, да", "time": 213},
    {"text": "Ты вся горишь, но мне прохладно", "time": 216},
    {"text": "И знаешь все, что мне там надо", "time": 219},
    {"text": "Под твоим халатом о-о-о", "time": 222}
        ],
        similar: ['116', '65', '144', '134', '54', '87', '94']
    },
    '116': {
        title: 'Otyzdan asyp baramyn',
        artist: 'Ирина Кайратовна',
        image: 'https://avatars.mds.yandex.net/i?id=1e6c8ea4c01bd8e1a6c4a53955af4c0888826e5b-7757621-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/er5wdr.mp3',
        duration: '214',
        lyrics: [
            { text: "Кейде өзімді танымаймын", time: 28 },
            { text: "Тез қайнайтын қаным-ай", time: 30 },
            { text: "Жел басылып, шаңы қайтты", time: 32 },
            { text: "Жасыра алмасаң анық айт", time: 34 },
            { text: "Уайымдап менің басым айналды", time: 36 },
            { text: "Жер шарын айналып", time: 38 },
            { text: "Келіп тауып пайдамды", time: 40 },
            { text: "Эй, қайдағы сайраған", time: 42 },
            { text: "Мен жай ғана майталман болғым келеді ісімде", time: 44 },
            { text: "Бұрынғыдай бәрін енді түсінбеймін, өмір түсімдей бірақ", time: 46 },
            { text: "Бәрі есімде", time: 50 },
            { text: "Үміт үзілмей сендім тек сезімге мен болғаны", time: 51 },
            { text: "Барлығы болған дер кезінде", time: 54 },
            { text: "Әр кезеңде менің қасымда әрдайым өзіме теңдер", time: 56 },
            { text: "Тағдырменен күресемін жолда (йее)", time: 59 },
            { text: "Түзу жүремін бірақ тартады солға (йее)", time: 63 },
            { text: "Уақыт құртамын кейде мен де босқа (йее)", time: 66 },
            { text: "Жас кеткенде ми келеді басқа", time: 70 },
            { text: "Жақсы мен жаман", time: 75 },
            { text: "Бәрі ақылы заман", time: 76 },
            { text: "Бәрі ақылды заман", time: 78 },
            { text: "Адасып қалма", time: 81 },
            { text: "Жақсы мен жаман", time: 82 },
            { text: "Бәрі ақылы заман", time: 84 },
            { text: "Бәрі ақылды заман", time: 85 },
            { text: "Адасып қалма", time: 88 },
            { text: "У меня всегда есть план Б", time: 104 },
            { text: "Как у вас хз", time: 105 },
            { text: "Но у нас в КЗ", time: 107 },
            { text: "500к ЗП ЖБ", time: 108 },
            { text: "Так говорит ТВ", time: 109 },
            { text: "Я ЗБ платить за КВ", time: 111 },
            { text: "Забыл УД, забрали в РОВД", time: 114 },
            { text: "Я не умею красиво доносить свои мысли", time: 117 },
            { text: "Поймут только самые близкие", time: 199 },
            { text: "Здесь нет числа уб*йца", time: 124 },
            { text: "Чисто из любопытства", time: 126 },
            { text: "В тридцать надо поменять быт свой", time: 127 },
            { text: "Падают листья, падают лица", time: 130 },
            { text: "Сколько бы ты не летаал", time: 132 },
            { text: "Можно упасть и разбиться", time: 134 },
            { text: "Сен көзіңді ашсаң бәрі for you (ее)", time: 135 },
            { text: "Үйің киіз үй, жүрегің ою (ее)", time: 139 },
            { text: "Өмір ақ пен қара", time: 142 },
            { text: "Өткен күн орал, арман", time: 143 },
            { text: "Қарау керек бауырым саған тек қана алға (ее)", time: 146 },
            { text: "Жақсы мен жаман", time: 150 },
            { text: "Төгілді шампан", time: 153 },
            { text: "Көңілді халқым менің", time: 154 },
            { text: "Өйткені отыздан асты жас балаң", time: 158 },
            { text: "Жиналды бәрі жақсы мен жаман", time: 161 },
            { text: "Жақсы мен жаман", time: 164 },
            { text: "Бәрі ақылы заман", time: 165 },
            { text: "Бәрі ақылды заман", time: 167 },
            { text: "Адасып қалма", time: 169 },
            { text: "Жақсы мен жаман", time: 171 },
            { text: "Бәрі ақылы заман", time: 172 },
            { text: "Бәрі ақылды заман", time: 175 },
            { text: "Адасып қалма", time: 176 },
        ],
        similar: ['117', '64', '198', '123', '14', '74', '33']
    },
    '117': {
        title: 'Ozin Gana',
        artist: 'Moldanazar',
        image: 'https://avatars.mds.yandex.net/i?id=f48e276a584468ce8bc63eab8d70cdca99eaa7b1-10464536-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/k2go0m.mp3',
        duration: '166',
        lyrics: [
            { text: "Сенен ғана сенен ғана", time: 9 },
            { text: "Бақытты сезіндім мен сенен ғана.", time: 15 },
            { text: "Тек жанымнан алыстама.", time: 19 },
            { text: "Өзің ғана өзің ғана", time: 26 },
            { text: "Жанымды жылатқан да, жұбатқан да,", time: 32 },
            { text: "Сезімімді оятқан да.", time: 36 },
            { text: "♪", time: 44 },
            { text: "Көңілімді, (сезімімді,)", time: 81 },
            { text: "Жасырам енді қалай сүйгенімді.", time: 86 },
            { text: "Мен өзіңді, тек өзіңді", time: 90 },
            { text: "Өзің ғана өзің ғана", time: 98 },
            { text: "Жанымды жылатқан да, жұбатқан да,", time: 103 },
            { text: "Сезімімді оятқан да.", time: 107 },
            { text: "♪", time: 115 },
            { text: "Өзің ғана Өзің ғана", time: 152 },
            { text: "Өзің ғана Өзің ғана", time: 160 },
        ],
        similar: ['118', '21', '111', '197', '142', '136', '54']
    },
    '118': {
        title: 'Среди тысячи',
        artist: 'SunThugga, Delle',
        image: 'https://avatars.mds.yandex.net/i?id=214df2e313f3f5f452bc5c5c5eec0b0058565079-10385057-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/ck34nh.mp3',
        duration: '90',
        lyrics: [
            { text: "Я никогда не брошу пить", time: 5 },
            { text: "Пусть всегда буду я весёлый и бухой", time: 7 },
            { text: "Ты знаешь то, что мне легче тебя забыть", time: 10 },
            { text: "Чем быть одиноким волком под луной", time: 12 },
            { text: "И ты нашла уже тысячи причин", time: 16 },
            { text: "Чтобы не смотреть в мои глаза", time: 18 },
            { text: "Но почему-то среди тысячи мужчин", time: 21 },
            { text: "Ты выбираешь сумасшедшего меня", time: 24 },
            { text: "А я всегда буду курить", time: 27 },
            { text: "Пусть мои волосы впитают этот дым", time: 30 },
            { text: "Ты знаешь то, что мне легче тебя убить", time: 32 },
            { text: "Чем подарить тебе свободу в этот мир", time: 35 },
            { text: "Ты и я", time: 39 },
            { text: "Потерялись среди тысячи планет", time: 41 },
            { text: "Как не сойти с ума", time: 44 },
            { text: "Приняв то, что нас там больше нет?", time: 46 },
            { text: "(Пам-парам, па-пам-парарам)", time: 50 },
            { text: "(Пам-парам, па-пам-парарам)", time: 56 },
            { text: "Я никогда не брошу пить", time: 61 },
            { text: "Пусть всегда буду я весёлый и бухой", time: 63 },
            { text: "Ты знаешь то, что мне легче тебя забыть", time: 66 },
            { text: "Чем быть одиноким волком под луной", time: 68 },
            { text: "И ты нашла уже тысячи причин", time: 71 },
            { text: "Чтобы не смотреть в мои глаза", time: 75 },
            { text: "Но почему-то среди тысячи мужчин", time: 78 },
            { text: "Ты выбираешь сумасшедшего меня", time: 80 },
            { text: "А я всегда буду курить", time: 84 },
            { text: "И тебя любить", time: 86 },
        ],
        similar: ['23', '175', '65', '56', '198', '44', '75']
    },
    '119': {
        title: 'Конспект',
        artist: 'SCIRENA',
        image: 'https://avatars.mds.yandex.net/i?id=b822543e589f7ebc0a1cdc3447f902a2543f9064-8306751-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/17dj0t.mp3',
        duration: '142',
        lyrics: [
            { text: "Написал вчера в директ, огонёк, типа респект", time: 13 },
            { text: "Может погуляем ночью? Хочешь, сделай мне конспект", time: 17 },
            { text: "Утром в университет, поступила на бюджет", time: 21 },
            { text: "Попросил закинуть нюдсы, проигнорила в ответ", time: 25 },
            { text: "Посмотри, крутая тачка, но какой менталитет", time: 29 },
            { text: "Он из тех парней, кто никогда не слышал слова Нет", time: 33 },
            { text: "Говорит ему за двадцать и моя учеба – бред", time: 36 },
            { text: "Милый, если бы ты знал, какой у меня факультет", time: 40 },
            { text: "В голове лишь карьерный план, план, план", time: 45 },
            { text: "Не гуляю, хожу только в зал, в зал, в зал", time: 49 },
            { text: "Не знакомлюсь, прости, реферат не сдам", time: 53 },
            { text: "Мой экзамен на чувствах - ты", time: 57 },
            { text: "Написал вчера в директ, огонёк, типа респект", time: 59 },
            { text: "Может погуляем ночью? Хочешь, сделай мне конспект", time: 64 },
            { text: "Утром в университет, поступила на бюджет", time: 67 },
            { text: "Попросил закинуть нюдсы, проигнорила в ответ", time: 71 },
            { text: "Новые подписки, лайков много", time: 76 },
            { text: "От таких, как он, как-то очково", time: 78 },
            { text: "Всем моим подругам, слово в слово", time: 80 },
            { text: "Вызывает кринж, я не готова", time: 81 },
            { text: "Сторис за рулем, подпись: Кто в гости?", time: 83 },
            { text: "Мне не то, что лень, мне пофиг вовсе", time: 85 },
            { text: "О чем думаешь? – О личном росте", time: 87 },
            { text: "Вижу как он вне себя от злости", time: 89 },
            { text: "Предки при деньгах везде платили", time: 91 },
            { text: "Я хочу сама, конспекты в силе", time: 93 },
            { text: "Если ты не сделал, то закрыли", time: 95 },
            { text: "Не хочу, чтоб так меня любили", time: 97 },
            { text: "И теперь другой он пишет в директ", time: 99 },
            { text: "С ней вдвоем в одном прямом эфире", time: 101 },
            { text: "Всем пока, экзамен на четыре", time: 102 },
            { text: "Планы состоятся в этом мире", time: 105 },
            { text: "Не гуляю, хожу только в зал, в зал, в зал", time: 106 },
            { text: "Не знакомлюсь, прости, реферат не сдам", time: 111 },
            { text: "Мой экзамен на чувствах - ты", time: 118 },
            { text: "Написал вчера в директ", time: 121 },
            { text: "Ты не пишешь, в чем секрет?", time: 123 },
            { text: "Может я приеду ночью?", time: 125 },
            { text: "Утром в университет", time: 126 },
            { text: "Поведусь на интеллект", time: 128 },
            { text: "Просит снова скинуть нюдсы", time: 131 },
            { text: "Извини, но связи нет", time: 135 },
        ],
        similar: ['120', '51', '124', '11', '135', '42', '128']
    },
    '120': {
        title: 'nan ursyn',
        artist: 'Beckth',
        image: 'https://avatars.mds.yandex.net/i?id=00ff559171684d255714df9e8dbc754acabe8f0b-5251549-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/d3hkk1.mp3',
        duration: '99',
        lyrics: [
            { text: "Әдемі өмірдің сәулесі жатыр көзіме шағылысып", time: 0 },
            { text: "Жете алсам оған өзіңмен, дамылым сонда табылсын", time: 2 },
            { text: "Сенің махаббатың жүрегіме шеге боп қағылсын", time: 5 },
            { text: "Сүйемін сені сүйемін, сүйемін сені, нан ұрсын", time: 8 },
            { text: "Нан ұрсын, нан ұрсын", time: 10 },
            { text: "Нан ұрсын, сүйемін сені нан ұрсын", time: 13 },
            { text: "Сүйемін сені, нан ұрсын", time: 20 },
            { text: "Біреуді жүрсің сағынып, біреуге әлі сағымсың", time: 23 },
            { text: "Айналаңда барлығының келеді сенімен танысқысы", time: 25 },
            { text: "Сұрағанда мамам айтам жай ғана таныс қыз деп", time: 28 },
            { text: "3-4 жыл таныспыз деп", time: 31 },
            { text: "Ойланып жоғалтпағам, болғанда шанс бізде", time: 32 },
            { text: "Көп уақыт жүрдім артынан, көп уақыт қан ішкізгем", time: 35 },
            { text: "Күнде қасымда кешке, болса да алыс түсте", time: 38 },
            { text: "Мен деп бәрін ұмыта салады болса да маңызды істері", time: 40 },
            { text: "Жақсы көрем, иә", time: 43 },
            { text: "Сен деп таңғы төрте отырып ап жаздым өлең, иә", time: 44 },
            { text: "Ғашық емессің менің ақшамның көлеміне", time: 47 },
            { text: "Бірақ егер керек болса жаным, мен бәрін төйлем, ха", time: 50 },
            { text: "Мнау не бәле трек брат?", time: 52 },
            { text: "Не деп шайып кеттің бляя", time: 55 },
            { text: "Еркек емессің ба бля", time: 57 },
            { text: "Не деп жыламсыраватсың", time: 58 },
            { text: "Қыз дей бергені несі заебал", time: 60 },
            { text: "(подкаблучник болмашы үйтіп ондай, жек көрем мен ондайды)", time: 62 },
            { text: "Нан ұрсын, нан ұрсын", time: 66 },
            { text: "Нан ұрсын, сүйемін сені нан ұрсын", time: 67 },
            { text: "Әдемі өмірдің сәулесі жатыр көзіме шағылысып", time: 77 },
            { text: "Жете алсам оған өзіңмен, дамылым сонда табылсын", time: 79 },
            { text: "Сенің махаббатың жүрегіме шеге боп қағылсын", time: 81 },
            { text: "Сүйемін сені сүйемін, сүйемін сені, нан ұрсын", time: 84 },
        ],
        similar: ['121', '56', '156', '76', '134', '48', '31']
    },
    '121': {
        title: 'tylsym',
        artist: 'Beckth, Tibo',
        image: 'https://avatars.mds.yandex.net/i?id=74711c38036ec0d5424521fab0bac65e8722d14a-5231754-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/qsvem0.mp3',
        duration: '157',
        lyrics: [
            { text: "Неге жүрсің үнемі көңілсіз бір күйде?", time: 2 },
            { text: "Сен жалғыз емессің,", time: 4 },
            { text: "Мен сені күтудемін.", time: 5 },
            { text: "Мазамды алатын, немесе ұрсып қалатын", time: 7 },
            { text: "Қырсық мінезіңсіз мында дым да қызық емес", time: 10 },
            { text: "Неге жүрсің үнемі көңілсіз бір күйде?", time: 13 },
            { text: "Сен жалғыз емессің, мен сені күтудемін", time: 16 },
            { text: "Мазамды алатын, немесе ұрсып қалатын", time: 18 },
            { text: "Қырсық мінезіңсіз мында дым да қызық емес", time: 20 },
            { text: "Аңсайм өзіңді ханшайым", time: 25 },
            { text: "Іздедім көлеңкеңді күн сайын", time: 27 },
            { text: "Сұрап тұрсайшы анда санда болсын", time: 28 },
            { text: "Қал жайымды қайдасың?", time: 29 },
            { text: "Қайтадан жоқсың өтіп кетті жазым", time: 31 },
            { text: "Сені ғашық қылам деп қаншама әндер жаздым жаным", time: 32 },
            { text: "Бір жерді шығамыз тесіп", time: 36 },
            { text: "Өзің білесің 5ке", time: 37 },
            { text: "Керемет естен кетпес кездерде кездескенше ерекше қыз", time: 38 },
            { text: "Сен маған шынайы сен әнімнің ішіндесің", time: 41 },
            { text: "Сен маған шынайы сен", time: 44 },
            { text: "Мына жүректің ішіндесің", time: 45 },
            { text: "Сенің ернің демің тылсым сезім", time: 46 },
            { text: "Басқа не дейін", time: 48 },
            { text: "Күлкі толы ыстық кезеңдерді бірге кезейік", time: 49 },
            { text: "Басты әкетеді басты әкетесің", time: 52 },
            { text: "Қолымнан келгенін істеймін", time: 54 },
            { text: "Бөлмесең кедей деп", time: 56 },
            { text: "Мені күтемін деп таң да атты…", time: 71 },
            { text: "Бұл өмір маған сені таңдатты", time: 72 },
            { text: "Бәлкім көзім басқаға ауған шығар байқамай, бірақ", time: 74 },
            { text: "толық қарай алмады, мен сүйемін сені тым қатты.", time: 76 },
            { text: "Мен естімеген әнді өзің ғана тыңдаттың сымбаттым,", time: 79 },
            { text: "тек түстерімнен іздеген шын бақытым.", time: 82 },
            { text: "Бір өзіңе қолжетімді, өзгелерге қымбатпын,", time: 85 },
            { text: "Тек өзіңе айдан анық, өзгелерге жұмбақпын.", time: 88 },
            { text: "Иә, шын айтам, білесің толық мені,", time: 90 },
            { text: "Өзіңмен тыныс аламын тек кеудеме толып демім.", time: 93 },
            { text: "Жинап бердің шашыраған жүрегімнің бөліктерін", time: 95 },
            { text: "Бала кезде анама айтатын қыз сен болып па едің?", time: 98 },
            { text: "Ренжісең де кейде маған қатты,", time: 102 },
            { text: "Көңілің тек мені жағалапты.", time: 106 },
            { text: "Келбетің сұлу оғын жүрегіме тақап атты,", time: 107 },
            { text: "Бұрын соңды болмаған мүлде сездіртті", time: 108 },
            { text: "махаббатты…", time: 111 },
            { text: "Неге жүрсің үнемі көңілсіз бір күйде?", time: 112 },
            { text: "Сен жалғыз емессің,", time: 114 },
            { text: "Мен сені күтудемін.", time: 115 },
            { text: "Мазамды алатын, немесе ұрсып қалатын", time: 117 },
            { text: "Қырсық мінезіңсіз мында дым да қызық емес", time: 118 },
            { text: "Неге жүрсің үнемі көңілсіз бір күйде?", time: 122 },
            { text: "Сен жалғыз емессің, мен сені күтудемін", time: 124 },
            { text: "Мазамды алатын, немесе ұрсып қалатын", time: 128 },
            { text: "Қырсық мінезіңсіз мында дым да қызық емес", time: 130 },
        ],
        similar: ['122', '32', '145', '197', '191', '151', '45']
    },
    '122': {
        title: 'Sheker',
        artist: 'Darkhan Juzz',
        image: 'https://avatars.mds.yandex.net/i?id=71a298ed6f566bc1344d874592a853de2fde7963-5321633-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/d02hh0.mp3',
        duration: '219',
        lyrics: [
            { text: "Қай қалтамда жоғалып кетседе құрысын бағанағы шаң-тозаң.", time: 0 },
            { text: "Мен бәріне ризамын, бәрі өз бабымен тфай-тфай-тфай, тағы не дейсің енді.", time: 6 },
            { text: "Жүзейін самғайын, қөңіл-күйіме осы өлеңім лайық, толғанайын.", time: 12 },
            { text: "Қосыл толқыныма, карап тұрма. Мә менің отыным сенің отыңа!", time: 18 },
            { text: "Уу-ее, шекер-шекер,", time: 23 },
            { text: "бір жағалауға мың шағала.", time: 26 },
            { text: "Құй шарап, құй шарап.", time: 30 },
            { text: "Ішейік-ішейік-ішейік-ішейік-ішейік йә.", time: 33 },
            { text: "Бері кел, қазiр мен сені үйретем.", time: 50 },
            { text: "Үш дөңгелек, баяғы балдырған.", time: 54 },
            { text: "Уақыт тығыз, бірақ саған орын қалдырғанмын.", time: 57 },
            { text: "Не жасырайын, берерім қолымда, мә бөпетайым. Ал, абайлап ал, адастырайын.", time: 61 },
            { text: "Мен де дайынмын. Керемет мереке!", time: 67 },
            { text: "Уу-ее, шекер-шекер,", time: 71 },
            { text: "бір жағалауға мың шағала.", time: 75 },
            { text: "Құй шарап, құй шарап.", time: 78 },
            { text: "Ішейік-ішейік-ішейік-ішейік-ішейік йә.", time: 80 },
            { text: "Шекер - шекер, мыңшағала, құй шарап.", time: 97 },
            { text: "Жүздеген мысық мяуылдайды майысып,", time: 120 },
            { text: "Бірақ Дарекенті сабырлы, Дарекенті қайсар.", time: 122 },
            { text: "Ешқайсысын танымайм, сондықтан жоламайм.", time: 126 },
            { text: "мен де пенде, үйткені сендей деңгей, бәрі .", time: 128 },
            { text: "Кербез тербел, жібек йығыңнан төгіліп, тігісінен сөгіліп.", time: 132 },
            { text: "Көзілдірікті мұрныма ілдіріп,", time: 137 },
            { text: "теңселем білдіртпей жүргенімді не бүлдіріп.", time: 140 },
        ],
        similar: ['123', '32', '121', '197', '134', '56', '45']
    },
    '123': {
        title: 'seekae',
        artist: 'test & recognise',
        image: 'https://avatars.mds.yandex.net/i?id=e2f1963037f5d1989d4fe6bb7c7318b7_sr-4481877-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/qfw0yu.mp3',
        duration: '300',
        lyrics: [
            { text: "I know what to do (Do)", time: 0 },
            { text: "Then come back for you (You)", time: 0 },
            { text: "I know what to do (Do)", time: 0 },
            { text: "Then come back for you (You)", time: 0 },
            { text: "I know what to do (Do)", time: 0 },
            { text: "Then come back for you (You)", time: 0 },
            { text: "(I come back for you)", time: 0 },
            { text: "When you asked me for some more, I was energised", time: 0 },
            { text: "Couldn't see your eyes, they were up inside", time: 0 },
            { text: "When you asked if I could see, I was pulverised", time: 0 },
            { text: "Sat in overdrive, test and recognise", time: 0 },
            { text: "When you asked me for some more, I was energised", time: 0 },
            { text: "Couldn't see your eyes, they were up inside", time: 0 },
            { text: "When you asked if I could see, I was pulverised", time: 0 },
            { text: "Sat in overdrive, test and recognise", time: 0 },
            { text: "When you asked me for some more, I was energised", time: 0 },
            { text: "Couldn't see your eyes, they were up inside", time: 0 },
            { text: "When you asked if I could see, I was pulverised", time: 0 },
            { text: "Sat in overdrive, test and recognise", time: 0 },
            { text: "When you asked me for some more, I was energised", time: 0 },
            { text: "Couldn't see your eyes, they were up inside", time: 0 },
            { text: "When you asked if I could see, I was pulverised", time: 0 },
            { text: "Sat in overdrive, test and recognise", time: 0 },
            { text: "When you asked me for some more, I was energised", time: 0 },
            { text: "Couldn't see your eyes, they were up inside", time: 0 },
            { text: "When you asked if I could see, I was pulverised", time: 0 },
            { text: "Sat in overdrive, test and recognise", time: 0 },
            { text: "I know what to do (Do)", time: 0 },
            { text: "Then come back for you (You)", time: 0 },
            { text: "I know what to do (Do)", time: 0 },
            { text: "Then come back for you (You)", time: 0 },
        ],
        similar: ['124', '53', '185', '21', '175', '135', '75']
    },
    '124': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['125', '', '', '', '', '', '']
    },
    '125': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['126', '', '', '', '', '', '']
    },
    '126': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['127', '', '', '', '', '', '']
    },
    '127': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['128', '', '', '', '', '', '']
    },
    '128': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['129', '', '', '', '', '', '']
    },
    '129': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['130', '', '', '', '', '', '']
    },
    '130': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['131', '', '', '', '', '', '']
    },
    '131': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['132', '', '', '', '', '', '']
    },
    '132': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['133', '', '', '', '', '', '']
    },
    '133': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['134', '', '', '', '', '', '']
    },
    '134': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['135', '', '', '', '', '', '']
    },
    '135': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['136', '', '', '', '', '', '']
    },
    '136': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['137', '', '', '', '', '', '']
    },
    '137': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['138', '', '', '', '', '', '']
    },
    '138': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['139', '', '', '', '', '', '']
    },
    '139': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['140', '', '', '', '', '', '']
    },
    '140': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['141', '', '', '', '', '', '']
    },
    '141': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['142', '', '', '', '', '', '']
    },
    '142': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['143', '', '', '', '', '', '']
    },
    '143': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['144', '', '', '', '', '', '']
    },
    '144': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['145', '', '', '', '', '', '']
    },
    '145': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['146', '', '', '', '', '', '']
    },
    '146': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['147', '', '', '', '', '', '']
    },
    '147': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['148', '', '', '', '', '', '']
    },
    '148': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['149', '', '', '', '', '', '']
    },
    '149': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['150', '', '', '', '', '', '']
    },
    '150': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['151', '', '', '', '', '', '']
    },
    '151': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['152', '', '', '', '', '', '']
    },
    '152': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['153', '', '', '', '', '', '']
    },
    '153': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['154', '', '', '', '', '', '']
    },
    '154': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['155', '', '', '', '', '', '']
    },
    '155': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['156', '', '', '', '', '', '']
    },
    '156': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['157', '', '', '', '', '', '']
    },
    '157': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['158', '', '', '', '', '', '']
    },
    '158': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['159', '', '', '', '', '', '']
    },
    '159': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['160', '', '', '', '', '', '']
    },
    '160': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['161', '', '', '', '', '', '']
    },
    '161': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['162', '', '', '', '', '', '']
    },
    '162': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['163', '', '', '', '', '', '']
    },
    '163': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['164', '', '', '', '', '', '']
    },
    '164': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['165', '', '', '', '', '', '']
    },
    '165': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['166', '', '', '', '', '', '']
    },
    '166': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['167', '', '', '', '', '', '']
    },
    '167': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['168', '', '', '', '', '', '']
    },
    '168': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['169', '', '', '', '', '', '']
    },
    '169': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['170', '', '', '', '', '', '']
    },
    '170': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['171', '', '', '', '', '', '']
    },
    '171': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['172', '', '', '', '', '', '']
    },
    '172': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['173', '', '', '', '', '', '']
    },
    '173': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['174', '', '', '', '', '', '']
    },
    '174': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['175', '', '', '', '', '', '']
    },
    '175': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['176', '', '', '', '', '', '']
    },
    '176': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['177', '', '', '', '', '', '']
    },
    '177': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['178', '', '', '', '', '', '']
    },
    '179': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['180', '', '', '', '', '', '']
    },
    '180': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['181', '', '', '', '', '', '']
    },
    '181': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['182', '', '', '', '', '', '']
    },
    '182': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['183', '', '', '', '', '', '']
    },
    '183': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['184', '', '', '', '', '', '']
    },
    '184': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['185', '', '', '', '', '', '']
    },
    '185': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['186', '', '', '', '', '', '']
    },
    '186': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['187', '', '', '', '', '', '']
    },
    '187': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['188', '', '', '', '', '', '']
    },
    '188': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['189', '', '', '', '', '', '']
    },
    '189': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['190', '', '', '', '', '', '']
    },
    '190': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['191', '', '', '', '', '', '']
    },
    '191': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['192', '', '', '', '', '', '']
    },
    '192': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['193', '', '', '', '', '', '']
    },
    '193': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['194', '', '', '', '', '', '']
    },
    '194': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['195', '', '', '', '', '', '']
    },
    '195': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['196', '', '', '', '', '', '']
    },
    '196': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['197', '', '', '', '', '', '']
    },
    '197': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['198', '', '', '', '', '', '']
    },
    '198': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['199', '', '', '', '', '', '']
    },
    '199': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ],
        similar: ['200', '', '', '', '', '', '']
    },
    '200': {
        title: '',
        artist: '',
        image: '',
        audio: '',
        duration: '',
        lyrics: [
            { text: "Нужна", time: 0 },
        ]
    },
};

// Данные плейлистов
const predefinedPlaylists = {
    'p1': { name: 'Поп', trackIds: ['1', '2'] },
    'p2': { name: 'Русский', trackIds: ['3', '4'] },
    'p3': { name: 'Santiz', trackIds: ['29', '30', '31', '32', '33', '34', '36', '37', '40'] },
    'p4': { name: 'vdk', trackIds: ['45', '46', '47', '48', '50'] },
    'p5': { name: 'Other', trackIds: ['51','45', '46', '47', '48', '49', '50', '54', ]},
    'p6': { name: 'Продалжения 2', trackIds: ['55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122',]},
};

// Глобальные переменные
const CACHE_NAME = 'music-player-offline-v1';
let userPlaylists = JSON.parse(localStorage.getItem('userPlaylists') || '{}');
let currentTrackId = null;
let currentPlaylistId = null;
let isPlaying = false;
let currentLyricIndex = -1;
let isFullscreenLyrics = false;
let showTranslation = false;
let isAutoplayEnabled = localStorage.getItem('autoplay') !== 'false';
let loopMode = localStorage.getItem('loopMode') || 'none';
const audioPlayer = new Audio();

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker зарегистрирован:', registration.scope);
        }).catch(error => {
            console.error('Ошибка регистрации Service Worker:', error);
        });
    });
}

// Обработка событий онлайн/офлайн
window.addEventListener('online', () => {
    console.log('Приложение онлайн');
    const offlineWarning = document.getElementById('offline-warning');
    if (offlineWarning) offlineWarning.classList.add('hidden');
});

window.addEventListener('offline', () => {
    console.log('Приложение офлайн');
    const offlineWarning = document.getElementById('offline-warning');
    if (offlineWarning) offlineWarning.classList.remove('hidden');
});

// Кэширование трека для офлайн-воспроизведения
function cacheTrack(trackId) {
    const track = tracks[trackId];
    if (!track) return;

    navigator.serviceWorker.controller?.postMessage({
        type: 'CACHE_TRACK',
        url: track.audio,
    });

    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'CACHE_SUCCESS' && event.data.url === track.audio) {
            alert(`Трек "${track.title}" сохранён для офлайн-воспроизведения`);
        } else if (event.data.type === 'CACHE_FAILED' && event.data.url === track.audio) {
            alert(`Не удалось сохранить трек "${track.title}" для офлайн-режима`);
        }
    });
}

// Проверка кэшированных треков
function checkCachedTracks() {
    caches.open(CACHE_NAME).then(cache => {
        cache.keys().then(keys => {
            const cachedTrackUrls = keys.filter(key => key.url.includes('.mp3')).map(key => key.url);
            console.log('Закэшированные треки:', cachedTrackUrls);
        });
    });
}

// Вспомогательные функции
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatRemainingTime(seconds, totalDuration) {
    const remaining = totalDuration - seconds;
    return `Осталось: -${formatTime(remaining)}`;
}

function getTrackUrl(trackId) {
    const baseUrl = window.location.origin || 'http://localhost';
    return `${baseUrl}${window.location.pathname}?track=${trackId}`;
}

// Управление воспроизведением
function togglePlay() {
    const track = tracks[currentTrackId];
    if (!track) return;

    if (isPlaying) {
        audioPlayer.pause();
    } else {
        if (audioPlayer.src !== track.audio) {
            audioPlayer.src = track.audio;
            audioPlayer.currentTime = 0;
            // Динамическое кэширование трека при воспроизведении
            caches.open(CACHE_NAME).then(cache => {
                cache.add(track.audio).catch(err => console.error(`Ошибка кэширования трека ${track.title}:`, err));
            });
        }
        audioPlayer.play().catch(e => console.error('Ошибка воспроизведения:', e));
    }

    isPlaying = !isPlaying;
    updatePlayButton();
    updateFullscreenPlayButton();
}

function playNextTrack() {
    if (!isAutoplayEnabled && loopMode === 'none') return;
    const track = tracks[currentTrackId];
    if (!track) return;

    if (loopMode === 'track') {
        openTrack(currentTrackId, currentPlaylistId);
        togglePlay();
        return;
    }

    if (currentPlaylistId && (loopMode === 'playlist' || isAutoplayEnabled)) {
        const playlist = {...predefinedPlaylists, ...userPlaylists}[currentPlaylistId];
        if (!playlist) return;
        const currentIndex = playlist.trackIds.indexOf(currentTrackId);
        let nextIndex = currentIndex + 1;
        if (nextIndex >= playlist.trackIds.length) {
            nextIndex = loopMode === 'playlist' ? 0 : -1;
        }
        if (nextIndex >= 0 && tracks[playlist.trackIds[nextIndex]]) {
            openTrack(playlist.trackIds[nextIndex], currentPlaylistId);
            togglePlay();
        }
        return;
    }

    if (isAutoplayEnabled && track.similar && track.similar.length > 0) {
        const nextTrackId = track.similar[0];
        if (nextTrackId && tracks[nextTrackId]) {
            openTrack(nextTrackId);
            togglePlay();
        }
    }
}

function playPreviousTrack() {
    const track = tracks[currentTrackId];
    if (!track) return;

    if (currentPlaylistId) {
        const playlist = {...predefinedPlaylists, ...userPlaylists}[currentPlaylistId];
        if (!playlist) return;
        const currentIndex = playlist.trackIds.indexOf(currentTrackId);
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = loopMode === 'playlist' ? playlist.trackIds.length - 1 : -1;
        }
        if (prevIndex >= 0 && tracks[playlist.trackIds[prevIndex]]) {
            openTrack(playlist.trackIds[prevIndex], currentPlaylistId);
            togglePlay();
        }
        return;
    }

    if (track.similar && track.similar.length > 0) {
        const prevTrackId = track.similar[track.similar.length - 1];
        if (prevTrackId && tracks[prevTrackId]) {
            openTrack(prevTrackId);
            togglePlay();
        }
    }
}

function toggleLoop() {
    loopMode = loopMode === 'none' ? 'track' : loopMode === 'track' ? 'playlist' : 'none';
    localStorage.setItem('loopMode', loopMode);
    updateLoopButton();
}

function updateLoopButton() {
    const loopText = document.getElementById('loop-text');
    const playerLoopText = document.getElementById('player-loop-text');
    const text = `Повтор: ${loopMode === 'none' ? 'Выкл' : loopMode === 'track' ? 'Трек' : 'Плейлист'}`;
    if (loopText) loopText.textContent = text;
    if (playerLoopText) playerLoopText.textContent = text;
}

// Обновление интерфейса
function updatePlayButton() {
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const playText = document.getElementById('play-text');
    const playerPlayIcon = document.getElementById('player-play-icon');
    const playerPauseIcon = document.getElementById('player-pause-icon');

    if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        playText.textContent = 'Пауза';
        playerPlayIcon.classList.add('hidden');
        playerPauseIcon.classList.remove('hidden');
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        playText.textContent = 'Играть';
        playerPlayIcon.classList.remove('hidden');
        playerPauseIcon.classList.add('hidden');
    }
}

function updateFullscreenPlayButton() {
    const fullscreenText = document.getElementById('fullscreen-play-text');
    if (fullscreenText) {
        fullscreenText.textContent = isPlaying ? 'Пауза' : 'Играть';
    }
}

function updatePlayer() {
    const track = tracks[currentTrackId];
    if (!track) return;

    document.getElementById('player-image').src = track.image;
    document.getElementById('player-title').textContent = track.title;
    document.getElementById('player-artist').textContent = track.artist;
}

function updateLyrics() {
    const track = tracks[currentTrackId];
    if (!track || !track.lyrics) return;

    const currentTime = audioPlayer.currentTime;
    const displayLyrics = showTranslation && track.translations ? track.translations : track.lyrics;
    const lyrics = document.querySelectorAll('#lyrics-container .lyric-line');
    const fullscreenLyrics = document.querySelectorAll('#fullscreen-lyrics-content .lyric-line');

    let newIndex = -1;
    for (let i = 0; i < displayLyrics.length; i++) {
        if (currentTime >= displayLyrics[i].time) {
            newIndex = i;
        } else {
            break;
        }
    }

    if (newIndex !== currentLyricIndex) {
        if (lyrics[currentLyricIndex]) {
            lyrics[currentLyricIndex].classList.remove('active');
            lyrics[currentLyricIndex].classList.add('opacity-60');
        }
        if (fullscreenLyrics[currentLyricIndex]) {
            fullscreenLyrics[currentLyricIndex].classList.remove('active');
        }

        currentLyricIndex = newIndex;

        if (lyrics[currentLyricIndex]) {
            lyrics[currentLyricIndex].classList.add('active');
            lyrics[currentLyricIndex].classList.remove('opacity-60');
            if (!isFullscreenLyrics) {
                lyrics[currentLyricIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        if (fullscreenLyrics[currentLyricIndex]) {
            fullscreenLyrics[currentLyricIndex].classList.add('active');
            if (isFullscreenLyrics) {
                fullscreenLyrics[currentLyricIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
}

// Навигация по интерфейсу
function openTrack(trackId, playlistId = null) {
    const track = tracks[trackId];
    if (!track) return;

    currentTrackId = trackId;
    currentPlaylistId = playlistId;
    showTranslation = false;
    currentLyricIndex = -1;

    document.getElementById('track-image').src = track.image;
    document.getElementById('track-title').textContent = track.title;
    document.getElementById('track-artist').textContent = track.artist;
    document.getElementById('total-time').textContent = formatTime(track.duration);
    document.getElementById('remaining-time').textContent = formatRemainingTime(0, track.duration);
    document.getElementById('player-total-time').textContent = formatTime(track.duration);
    document.getElementById('player-remaining-time').textContent = formatRemainingTime(0, track.duration);

    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerHTML = '';
    const displayLyrics = track.translations && showTranslation ? track.translations : track.lyrics;
    displayLyrics.forEach(line => {
        const div = document.createElement('div');
        div.className = 'lyric-line mb-4 transition-opacity duration-300 opacity-60';
        div.textContent = line.text;
        lyricsContainer.appendChild(div);
    });

    const translationToggle = document.getElementById('translation-toggle');
    translationToggle.classList.toggle('hidden', !track.translations);
    translationToggle.textContent = showTranslation ? 'Скрыть перевод' : 'Показать перевод';

    const similarContainer = document.querySelector('#track-view .flex.overflow-x-auto');
    similarContainer.innerHTML = '';
    track.similar.forEach(similarId => {
        const similarTrack = tracks[similarId];
        if (!similarTrack) return;
        const div = document.createElement('div');
        div.className = 'flex flex-col items-center flex-shrink-0 w-24';
        div.onclick = () => openTrack(similarId);
        div.innerHTML = `
            <div class="w-24 h-24 rounded-full overflow-hidden">
                <img src="${similarTrack.image}" alt="${similarTrack.title}" class="w-full h-full object-cover">
            </div>
            <h4 class="mt-3 font-medium text-center truncate w-full">${similarTrack.title}</h4>
            <p class="text-sm text-gray-400 text-center truncate w-full">${similarTrack.artist}</p>
        `;
        similarContainer.appendChild(div);
    });

    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('track-view').classList.remove('hidden');
    document.getElementById('player').classList.remove('hidden');
    if (document.getElementById('playlist-view')) {
        document.getElementById('playlist-view').classList.add('hidden');
    }

    updatePlayer();
    updateAutoplayButton();
    updateLoopButton();
    document.getElementById('progress-bar').value = 0;
    document.getElementById('current-time').textContent = '00:00';
    document.getElementById('player-current-time').textContent = '00:00';

    if (isPlaying) {
        togglePlay();
    }

    window.scrollTo(0, 0);
}

function backToMain() {
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('track-view').classList.add('hidden');
    if (document.getElementById('playlist-view')) {
        document.getElementById('playlist-view').classList.add('hidden');
    }
    currentPlaylistId = null;
    if (isFullscreenLyrics) {
        toggleFullscreenLyrics();
    }
}

function toggleFullscreenLyrics() {
    isFullscreenLyrics = !isFullscreenLyrics;
    const fullscreenLyrics = document.getElementById('fullscreen-lyrics');
    const fullscreenContent = document.getElementById('fullscreen-lyrics-content');

    if (isFullscreenLyrics) {
        fullscreenContent.innerHTML = '';
        const track = tracks[currentTrackId];
        if (track && track.lyrics) {
            const displayLyrics = showTranslation && track.translations ? track.translations : track.lyrics;
            displayLyrics.forEach((line, index) => {
                const div = document.createElement('div');
                div.className = `lyric-line ${index === currentLyricIndex ? 'active' : ''}`;
                div.textContent = line.text;
                fullscreenContent.appendChild(div);
            });
        }

        const fullscreenTranslationToggle = document.getElementById('fullscreen-translation-toggle');
        fullscreenTranslationToggle.classList.toggle('hidden', !tracks[currentTrackId]?.translations);
        fullscreenTranslationToggle.textContent = showTranslation ? 'Скрыть перевод' : 'Показать перевод';

        fullscreenLyrics.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            const activeLine = fullscreenContent.querySelector('.lyric-line.active');
            if (activeLine) {
                activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);

        updateFullscreenPlayButton();
    } else {
        fullscreenLyrics.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function toggleTranslation() {
    showTranslation = !showTranslation;
    const track = tracks[currentTrackId];
    if (!track) return;

    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerHTML = '';
    const displayLyrics = showTranslation && track.translations ? track.translations : track.lyrics;
    displayLyrics.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = `lyric-line mb-4 transition-opacity duration-300 ${index === currentLyricIndex ? '' : 'opacity-60'}`;
        div.textContent = line.text;
        lyricsContainer.appendChild(div);
    });

    if (isFullscreenLyrics) {
        const fullscreenContent = document.getElementById('fullscreen-lyrics-content');
        fullscreenContent.innerHTML = '';
        displayLyrics.forEach((line, index) => {
            const div = document.createElement('div');
            div.className = `lyric-line ${index === currentLyricIndex ? 'active' : ''}`;
            div.textContent = line.text;
            fullscreenContent.appendChild(div);
        });
        setTimeout(() => {
            const activeLine = fullscreenContent.querySelector('.lyric-line.active');
            if (activeLine) {
                activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    const translationToggle = document.getElementById('translation-toggle');
    const fullscreenTranslationToggle = document.getElementById('fullscreen-translation-toggle');
    const buttonText = showTranslation ? 'Скрыть перевод' : 'Показать перевод';
    translationToggle.textContent = buttonText;
    fullscreenTranslationToggle.textContent = buttonText;
}

// Управление плейлистами
function updatePlaylistsGrid() {
    const grid = document.getElementById('playlists-grid');
    grid.innerHTML = '';
    const allPlaylists = { ...predefinedPlaylists, ...userPlaylists };
    Object.entries(allPlaylists).forEach(([id, playlist]) => {
        const div = document.createElement('div');
        div.className = 'playlist-card';
        div.onclick = () => openPlaylist(id);
        const coverImage = playlist.trackIds[0] ? tracks[playlist.trackIds[0]].image : 'https://via.placeholder.com/150';
        div.innerHTML = `
            <img src="${coverImage}" alt="${playlist.name}" class="w-full aspect-square object-cover">
            <div class="p-3">
                <h3 class="font-medium truncate">${playlist.name}</h3>
                <p class="text-sm text-gray-400 truncate">${playlist.trackIds.length} треков</p>
            </div>
        `;
        grid.appendChild(div);
    });
}

function openPlaylist(playlistId) {
    const playlist = { ...predefinedPlaylists, ...userPlaylists }[playlistId];
    if (!playlist) return;

    document.getElementById('main-view').classList.add('hidden');
    let playlistView = document.getElementById('playlist-view');
    if (!playlistView) {
        playlistView = document.createElement('div');
        playlistView.id = 'playlist-view';
        document.getElementById('app').appendChild(playlistView);
    }

    playlistView.innerHTML = `
        <button onclick="backToMain()" class="flex items-center text-gray-400 hover:text-white mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Назад
        </button>
        <h2 class="text-2xl font-semibold mb-4">${playlist.name}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            ${playlist.trackIds.map(trackId => {
                const track = tracks[trackId];
                if (!track) return '';
                return `
                    <div class="music-card" onclick="openTrack('${trackId}', '${playlistId}')">
                        <img src="${track.image}" alt="${track.title}" class="w-full aspect-square object-cover">
                        <div class="p-3">
                            <h3 class="font-medium truncate">${track.title}</h3>
                            <p class="text-sm text-gray-400 truncate">${track.artist}</p>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    playlistView.classList.remove('hidden');
}

function openCreatePlaylistModal() {
    document.getElementById('create-playlist-modal').classList.remove('hidden');
    document.getElementById('playlist-name-input').focus();
}

function closeCreatePlaylistModal() {
    document.getElementById('create-playlist-modal').classList.add('hidden');
    document.getElementById('playlist-name-input').value = '';
}

function createPlaylist() {
    const name = document.getElementById('playlist-name-input').value.trim();
    if (!name) return alert('Введите название плейлиста');

    const playlistId = 'u' + Date.now();
    userPlaylists[playlistId] = { name, trackIds: [] };
    localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
    updatePlaylistsGrid();
    closeCreatePlaylistModal();
}

function openAddToPlaylistModal() {
    const playlistsList = document.getElementById('playlists-list');
    playlistsList.innerHTML = '';
    const allPlaylists = { ...predefinedPlaylists, ...userPlaylists };
    Object.entries(allPlaylists).forEach(([id, playlist]) => {
        const div = document.createElement('div');
        div.className = 'p-2 hover:bg-gray-700/50 cursor-pointer rounded';
        div.textContent = playlist.name;
        div.onclick = () => addToPlaylist(id);
        playlistsList.appendChild(div);
    });
    document.getElementById('add-to-playlist-modal').classList.remove('hidden');
}

function closeAddToPlaylistModal() {
    document.getElementById('add-to-playlist-modal').classList.add('hidden');
}

function addToPlaylist(playlistId) {
    if (!currentTrackId) return;
    if (userPlaylists[playlistId]) {
        if (!userPlaylists[playlistId].trackIds.includes(currentTrackId)) {
            userPlaylists[playlistId].trackIds.push(currentTrackId);
            localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
        }
    }
    closeAddToPlaylistModal();
    alert('Трек добавлен в плейлист');
}

// Поделиться треком
function shareTrack() {
    if (!currentTrackId) return;
    const track = tracks[currentTrackId];
    if (!track) return;

    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере!`;

    if (navigator.share && window.location.protocol === 'https:') {
        navigator.share({ title: track.title, text, url })
            .catch(() => openShareModal(url, text));
    } else {
        openShareModal(url, text);
    }
}

function openShareModal(url, text) {
    document.getElementById('share-modal').classList.remove('hidden');
    const manualCopy = document.getElementById('manual-copy');
    const manualCopyInput = document.getElementById('manual-copy-id');
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
        manualCopy.classList.remove('hidden');
        manualCopyInput.value = url;
    } else {
        manualCopy.classList.add('hidden');
    }
}

function closeShareModal() {
    document.getElementById('share-modal').classList.add('hidden');
}

function selectManualCopyText() {
    const input = document.getElementById('manual-copy-id');
    input.select();
    alert('Ссылка выделена. Скопируйте её с помощью Ctrl+C.');
}

function copyTrackUrl() {
    if (!currentTrackId) return;
    const url = getTrackUrl(currentTrackId);
    if (window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Ссылка скопирована!');
                closeShareModal();
            })
            .catch(() => {
                alert('Не удалось скопировать. Скопируйте вручную.');
                document.getElementById('manual-copy').classList.remove('hidden');
                document.getElementById('manual-copy-id').value = url;
            });
    } else {
        alert('Копирование недоступно. Скопируйте вручную.');
        document.getElementById('manual-copy').classList.remove('hidden');
        document.getElementById('manual-copy-id').value = url;
    }
}

function shareToTwitter() {
    const track = tracks[currentTrackId];
    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере!`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    closeShareModal();
}

function shareToWhatsApp() {
    const track = tracks[currentTrackId];
    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере! ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    closeShareModal();
}

function shareToTelegram() {
    const track = tracks[currentTrackId];
    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере! ${url}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    closeShareModal();
}

function toggleAutoplay() {
    isAutoplayEnabled = !isAutoplayEnabled;
    localStorage.setItem('autoplay', isAutoplayEnabled);
    updateAutoplayButton();
}

function updateAutoplayButton() {
    const autoplayText = document.getElementById('autoplay-text');
    if (autoplayText) {
        autoplayText.textContent = `Автовоспроизведение: ${isAutoplayEnabled ? 'Вкл' : 'Выкл'}`;
    }
}

// Темы
function toggleTheme() {
    const body = document.body;
    const isLightTheme = body.classList.contains('light-theme');
    body.classList.toggle('light-theme');

    const themeText = document.getElementById('theme-text');
    const themeIcon = document.getElementById('theme-icon');
    if (isLightTheme) {
        themeText.textContent = 'Светлая тема';
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeText.textContent = 'Темная тема';
        themeIcon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
        localStorage.setItem('theme', 'light');
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка темы
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-text').textContent = 'Темная тема';
        document.getElementById('theme-icon').innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    }

    // Загрузка трека из URL
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('track');
    if (trackId && tracks[trackId]) {
        openTrack(trackId);
    }

    // Обработчики событий
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('volume-control').addEventListener('input', e => {
        audioPlayer.volume = e.target.value / 100;
    });
    document.getElementById('progress-bar').addEventListener('input', e => {
        const track = tracks[currentTrackId];
        if (!track) return;
        const seekTime = (e.target.value / 100) * track.duration;
        audioPlayer.currentTime = seekTime;
        document.getElementById('current-time').textContent = formatTime(seekTime);
        document.getElementById('player-current-time').textContent = formatTime(seekTime);
        document.getElementById('remaining-time').textContent = formatRemainingTime(seekTime, track.duration);
        document.getElementById('player-remaining-time').textContent = formatRemainingTime(seekTime, track.duration);
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const track = tracks[currentTrackId];
        if (!track) return;
        const currentTime = audioPlayer.currentTime;
        const progress = (currentTime / track.duration) * 100;
        document.getElementById('progress-bar').value = progress;
        document.getElementById('current-time').textContent = formatTime(currentTime);
        document.getElementById('player-current-time').textContent = formatTime(currentTime);
        document.getElementById('remaining-time').textContent = formatRemainingTime(currentTime, track.duration);
        document.getElementById('player-remaining-time').textContent = formatRemainingTime(currentTime, track.duration);
        updateLyrics();
    });

    audioPlayer.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayButton();
        updateFullscreenPlayButton();
        document.getElementById('progress-bar').value = 0;
        document.getElementById('current-time').textContent = '00:00';
        document.getElementById('player-current-time').textContent = '00:00';
        document.getElementById('remaining-time').textContent = `Осталось: -${formatTime(tracks[currentTrackId].duration)}`;
        document.getElementById('player-remaining-time').textContent = `Осталось: -${formatTime(tracks[currentTrackId].duration)}`;
        playNextTrack();
    });

    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
        updateFullscreenPlayButton();
    });

    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
        updateFullscreenPlayButton();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && isFullscreenLyrics) {
            toggleFullscreenLyrics();
        } else if (e.key === 'Escape' && !document.getElementById('create-playlist-modal').classList.contains('hidden')) {
            closeCreatePlaylistModal();
        } else if (e.key === 'Escape' && !document.getElementById('add-to-playlist-modal').classList.contains('hidden')) {
            closeAddToPlaylistModal();
        } else if (e.key === 'Escape' && !document.getElementById('share-modal').classList.contains('hidden')) {
            closeShareModal();
        } else if (e.code === 'Space' && currentTrackId) {
            e.preventDefault();
            togglePlay();
        }
    });

    audioPlayer.volume = 0.5;
    updatePlaylistsGrid();
    updateAutoplayButton();
    updateLoopButton();
    checkCachedTracks();
});
