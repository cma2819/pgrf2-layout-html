<script>
/* global nodecg */
import { ref, defineProps } from 'vue'
import { useStore } from 'vuex';

const state = useStore();

/** @type import('../../../nodecg/speedcontrol').SpeedcontrolInstance */
const scNodecg = nodecg;
/** @type import('../../../nodecg/speedcontrol-additions').SpeedcontrolAdditionsInstance */
const additionNodecg = nodecg;

scNodecg.Replicant('runDataActiveRunSurrounding', 'nodecg-speedcontrol').on('change', (surrounding) => {
  scNodecg.readReplicant('runDataArray', 'nodecg-speedcontrol', (runArray) => {
  const current = surrounding.current;

    const currentIndex = Math.max(runArray.findIndex((run) => run.id === current), 0);

    additionNodecg.readReplicant('commentatorArray', 'speedcontrol-additions', (commentators) => {

      const runs = runArray.slice(currentIndex, currentIndex + 4).map((run) => {
        return {
          title: run.game || '',
          category: run.category || '',
          platform: run.system || '',
          startsAt: run.scheduled || '',
          est: run.estimate || '',
          runners: run.teams.flatMap(team => team.players.map((player) => {
            return {
              id: player.externalID,
              name: player.name,
              accounts: {}
            }
          })),
          commentators: commentators.filter(commentator => commentator.assignedRunIdArray
            .includes(run.externalID)).map((commentator) => {
              return {
                name: commentator.name,
                accounts: commentator.social,
              };
            }),
        };
      });
      state.dispatch('setRuns', runs);
    });
  });
})

</script>
