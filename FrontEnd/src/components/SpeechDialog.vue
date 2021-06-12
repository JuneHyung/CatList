<template>
    <v-dialog v-model="speechDialog" persistent max-width="500px">
        <v-card>
            <v-card-title> 음성 입력 </v-card-title>
            <v-card-text>
                <v-row>
                    <div class="words"></div>
                    <div @click="startSpeech()">버튼</div>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="closeSpeechDialog">확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'SpeechDialog',
    data() {
        return {
            message: '',
            startDialog: false,
        };
    },
    props: {
        speechDialog: Boolean,
    },
    methods: {
        closeSpeechDialog() {
            this.$emit('closeSpeechDialog', this.speechDialog);
        },
        startSpeech() {
            this.startDialog = true;
            window.SpeechRecognition = window.Recognition || window.webkitSpeechRecognition;
            const recognition = new window.SpeechRecognition();
            recognition.interimResults = true;

            let p = document.createElement('p');
            const words = document.querySelector('.words');
            words.appendChild(p);

            recognition.addEventListener('result', (e) => {
                console.log(e.results);
                const transcript = Array.from(e.results)
                    .map((result) => result[0])
                    .map((result) => result.transcript)
                    .join('');

                p.textContent = transcript;
                this.message = transcript;
                if (e.results[0].isFinal) {
                    p = document.createElement('p');
                    this.message = transcript;
                    words.appendChild(p);
                }
            });

            recognition.addEventListener('end', recognition.start);
            recognition.start();
        },
    },
};
</script>

<style></style>
